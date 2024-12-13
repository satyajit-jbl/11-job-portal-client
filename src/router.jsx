import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import Register from "./pages/Register";
import Signin from "./pages/Signin/Signin";
import JobDetails from "./pages/JobDetails/JobDetails";
import PrivateRouter from "./PrivateRouter";
import JobApply from "./pages/JobApply/JobApply";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      // errorElement: <h2>Route not Found</h2>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: '/jobs/:id',
            element: <PrivateRouter><JobDetails></JobDetails></PrivateRouter>,
            loader: ({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
            path: '/JobApply/:id',
            element: <PrivateRouter><JobApply></JobApply></PrivateRouter>
        },
        {
            path: 'register',
            element: <Register></Register>

        },
        {
          path: 'signIn',
          element: <Signin></Signin>
        },
        
      ]
    },
  ]);

  export default router;
  