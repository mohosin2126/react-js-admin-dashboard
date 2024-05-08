import {
    createBrowserRouter
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import AllUser from "../AdminDashboard/AllUser";
import AddUser from "../AdminDashboard/AddUser";
import Update from "../AdminDashboard/Update";
 
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
          path:"/alluser",
          element:<AllUser></AllUser>,
        },
        {
          path:"/adduser",
          element:<AddUser></AddUser>,
        },
        {
          path: "/update/:id",
          element: <Update></Update>,
          loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        },
      ]
    },
  ]);
  