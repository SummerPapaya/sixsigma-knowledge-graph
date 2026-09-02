import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { nodeById } from '../content'
import type { Belt, DomainFilter, Locale, ViewId } from '../content/types'
import { BELTS, VIEWS } from '../content/types'
import { applyCursors } from '../theme/cursors'
import type { Theme } from '../theme/belts'

export type { Theme }

export type AppState = {
  lang: Locale
  belt: Belt
  domain: DomainFilter
  view: ViewId
  selectedId: string | null
  search: string
  lockNotice: boolean
  theme: Theme
}

type AppContextValue = AppState & {
  setLang: (lang: Locale) => void
  setBelt: (belt: Belt) => void
  setDomain: (domain: DomainFilter) => void
  setView: (view: ViewId) => void
  select: (id: string | null) => void
  setSearch: (q: string) => void
  setTheme: (theme: Theme) => void
  dismissLock: () => void
  navigate: (patch: Partial<AppState>) => void
}

const THEME_KEY = 'sigma-atlas-theme'

function storedTheme(): Theme {
  try {
    const v = localStorage.getItem(THEME_KEY)
    if (v === 'light' || v === 'dark') return v
  } catch {
    /* ignore */
  }
  return 'dark'
}

const DEFAULTS: AppState = {
  lang: 'zh',
  belt: 'green',
  domain: 'all',
  view: 'graph',
  selectedId: null,
  search: '',
  lockNotice: false,
  theme: 'dark',
}

const DOMAIN_FILTERS: DomainFilter[] = ['all', 'six-sigma', 'supply-chain']

function parseHash(): Partial<AppState> {
  const raw = window.location.hash.replace(/^#\/?/, '')
  if (!raw) return {}
  const [lang, belt, domain, view, id] = raw.split('/')
  const next: Partial<AppState> = {}
  if (lang === 'zh' || lang === 'en') next.lang = lang
  if ((BELTS as readonly string[]).includes(belt)) next.belt = belt as Belt
  if (DOMAIN_FILTERS.includes(domain as DomainFilter)) {
    next.domain = domain as DomainFilter
  }
  if ((VIEWS as readonly string[]).includes(view)) next.view = view as ViewId
  if (id && nodeById.has(id)) next.selectedId = id
  return next
}

function writeHash(state: AppState) {
  const parts: string[] = [state.lang, state.belt, state.domain, state.view]
  if (state.selectedId) parts.push(state.selectedId)
  const next = `#/${parts.join('/')}`
  if (window.location.hash !== next) {
    window.history.replaceState(null, '', next)
  }
}

const AppContext = createContext<AppContextValue | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(() => ({
    ...DEFAULTS,
    theme: storedTheme(),
    ...parseHash(),
  }))

  useEffect(() => {
    writeHash(state)
    document.documentElement.lang = state.lang === 'zh' ? 'zh-CN' : 'en'
    document.documentElement.dataset.belt = state.belt
    document.documentElement.dataset.theme = state.theme
    applyCursors(state.belt, state.theme)
    try {
      localStorage.setItem(THEME_KEY, state.theme)
    } catch {
      /* ignore */
    }
  }, [state])

  useEffect(() => {
    const onHash = () => {
      setState((s) => ({ ...s, ...parseHash(), lockNotice: false }))
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const navigate = useCallback((patch: Partial<AppState>) => {
    setState((s) => ({ ...s, ...patch }))
  }, [])

  const value = useMemo<AppContextValue>(
    () => ({
      ...state,
      setLang: (lang) => navigate({ lang }),
      setBelt: (belt) => navigate({ belt, lockNotice: false }),
      setDomain: (domain) => navigate({ domain }),
      setView: (view) => navigate({ view }),
      select: (id) => navigate({ selectedId: id }),
      setSearch: (search) => navigate({ search }),
      setTheme: (theme) => navigate({ theme }),
      dismissLock: () => navigate({ lockNotice: false }),
      navigate,
    }),
    [state, navigate],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp outside provider')
  return ctx
}
