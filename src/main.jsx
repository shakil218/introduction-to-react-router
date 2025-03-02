import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from "./App.jsx"
import Home from './Components/Home/Home.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Components/About/About.jsx';
import Blogs from './Components/Blogs/Blogs.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Users from './Components/Users/Users.jsx';
import UserShowDetails from './Components/UserShowDetails/UserShowDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/users",
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:"/user/:userId",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserShowDetails></UserShowDetails>
      },
      {
        path:"/blogs",
        loader:()=>fetch("https://jsonplaceholder.typicode.com/posts"),
        element:<Blogs></Blogs>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
