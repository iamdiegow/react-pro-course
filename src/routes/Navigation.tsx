import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate
} from 'react-router-dom'
import logo from '../logo.svg'

function isActive({ isActive }: { isActive: boolean }) {
  return isActive ? 'nav-active' : ''
}

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='react logo' />
          <ul>
            <li>
              <NavLink to='/home' className={isActive}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' className={isActive}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/users' className={isActive}>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='about' element={<h1>About page</h1>}></Route>
          <Route path='users' element={<h1>Users page</h1>}></Route>
          <Route path='home' element={<h1>Home page</h1>}></Route>
          <Route path='/*' element={<Navigate to='home' replace />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
