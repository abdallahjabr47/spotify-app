import { Suspense } from 'react';
import './App.css';
import { createRoutesFromElements, createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { routes } from './Utils/Utils';
import HomeLayout from './Layout/HomeLayout/HomeLayout';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';

function App() {

  //console.log("Me", user);
  //console.log("token", token);

  const pagesRoutes = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path={'/login'} element={<Login />} />
      <Route element={<HomeLayout />} errorElement={<NotFound />} >
      <Route path={'/profile'} element={<Profile />} />
      {
        routes.map((route, idx) => {
          return <Route path={route.path} key={idx} element={route.component} />
            })
      }
            </Route>
      </>
    )
  )

  return ( 
    <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={pagesRoutes} />
    </Suspense>
  );
}

export default App;