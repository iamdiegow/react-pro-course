import { Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';
import logo from '../logo.svg';

import { routes } from './routes';

function isActive({ isActive }: { isActive: boolean }) {
  return isActive ? 'nav-active' : '';
}

export const Navigation = () => {
  return (
    <Suspense fallback={<span>loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="react logo" />
            <ul>
              {routes.map(({ to, name }) => {
                return (
                  <li key={to}>
                    <NavLink to={to} className={isActive}>
                      {name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ path, Component }) => {
              return <Route key={path} path={path} element={<Component />} />;
            })}
            <Route
              path="/*"
              element={<Navigate to={routes[0].to} replace />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
