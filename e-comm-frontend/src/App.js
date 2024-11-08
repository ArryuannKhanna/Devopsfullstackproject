import './App.css';

// React-router-dom import 
import {createBrowserRouter,RouterProvider} from 'react-router-dom';

// JSX components import 
import HomePage from './components/HomePage';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Profile from './components/Profile';
import AddProducts from './components/AddProducts';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout/>
  ),
    children: [
      {
        path: '/',
        element:<HomePage/>
      },
      {
        path: '/profile',
        element: <Profile/>
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/shop',
        element: <Shop/>
      },
      {
        path: '/addproduct',
        element: <AddProducts/>
      }
    ]
  }
])
function App() {
  return (
    <div className="App">
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
