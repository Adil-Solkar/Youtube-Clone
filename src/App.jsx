import { createBrowserRouter, RouterProvider } from 'react-router';
import { Provider } from 'react-redux';
import store from './utils/store';
import Body from './components/Body';
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage';

// Partial routes
const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children:[{
    path:"/",
    element:<MainContainer />,
  },
  {
    path:"/watch",
    element: <WatchPage />
  }
  ],
}])

function App() {
 
  return (
    <Provider store={store}> 
      <>
      <RouterProvider router={appRouter}/>
    </>
    </Provider>
  )
}

export default App

/*
*  Head 
*  Body
*    Sidebar
*       MenuItems
*  MainContainer
*       ButtonList
*       VideoContainer
*         VideoCard 
*
*/