import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span className='pre-title'>Página oficial</span>
              <span>VENCOACH</span>
            </h1>
            <h2>Desarrollo en proceso ...</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright &copy; 2022 Vencoach</p>
      </footer>
    </div>
  )
}