import { useTitle } from '../lib/head'
import { createGlobalStyles } from 'goober/global'

const GlobalStyles = createGlobalStyles`
  html,
  body {
    background: light;
  }

  * {
    box-sizing: border-box;
  }
`

export default function BaseLayout({ title, children }) {
  useTitle(title || 'Preact Island Example')
  return (
    <>
      <GlobalStyles />
      <div class="max-w-3xl px-2 mx-auto">{children}</div>
    </>
  )
}
