import { Drawer, LockBanner } from './chrome/Drawer'
import { StatusBar, TopBar } from './chrome/TopBar'
import { AppProvider, useApp } from './state/AppState'
import { BriefingView } from './views/BriefingView'
import { FlashcardsView } from './views/FlashcardsView'
import { GraphView } from './views/GraphView'
import { MindMapView } from './views/MindMapView'

export default function App() {
  return (
    <AppProvider>
      <Shell />
    </AppProvider>
  )
}

function Shell() {
  const { view } = useApp()
  const showDrawer = view === 'graph' || view === 'mindmap'

  return (
    <div className="atlas-shell">
      <TopBar />
      <div className={`atlas-main ${showDrawer ? 'has-drawer' : ''}`}>
        <main className="relative min-h-0 overflow-hidden">
          <LockBanner />
          {view === 'graph' ? <GraphView /> : null}
          {view === 'mindmap' ? <MindMapView /> : null}
          {view === 'briefing' ? <BriefingView /> : null}
          {view === 'flashcards' ? <FlashcardsView /> : null}
        </main>
        {showDrawer ? <Drawer /> : null}
      </div>
      <StatusBar />
    </div>
  )
}
