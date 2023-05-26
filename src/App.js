import { Suspense } from 'react';
import './App.css';
import { createRoutesFromElements, createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { routes } from './Utils/Utils';
import HomeLayout from './Layout/HomeLayout/HomeLayout';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Components/Login/Login';

function App() {

  //console.log("Me", user);
  //console.log("token", token);

  const pagesRoutes = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path={'/login'} element={<Login />} />
      {
        routes.map((route, idx) => {
          return <Route element={<HomeLayout />} key={idx} errorElement={<NotFound />} >
              <Route path={route.path} element={route.component} />
          </Route>
        })
      }
      </>
    )
  )

  return ( 
    <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={pagesRoutes} />
    {/* <div className="App"> 
      {
        token ? (
          <HomeLayout spotify={spotify}/>
        ) : (
          
        )
      }
    </div> */}
    </Suspense>
  );
}

export default App;