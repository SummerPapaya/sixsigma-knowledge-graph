import katex from 'katex'

export function Formula({ expr }: { expr: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: true,
  })
  return (
    <div className="formula overflow-x-auto py-2" dangerouslySetInnerHTML={{ __html: html }} />
  )
}
