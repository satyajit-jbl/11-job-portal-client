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
import MyApplications from "./pages/MyApplications/MyApplications";
import AddJob from "./pages/AddJob/AddJob";
import MyPostedJobs from "./pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "./pages/ViewApplications/ViewApplications";


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
            path: 'jobs/:id',
            element: <PrivateRouter><JobDetails></JobDetails></PrivateRouter>,
            loader: ({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
            path: 'JobApply/:id',
            element: <PrivateRouter><JobApply></JobApply></PrivateRouter>
        },
        {
            path: 'myApplications',
            element: <PrivateRouter><MyApplications></MyApplications></PrivateRouter>
        },
        {
            path: 'addJob',
            element: <PrivateRouter><AddJob></AddJob></PrivateRouter>
        },
        {
            path: 'myPostedJobs',
            element: <PrivateRouter><MyPostedJobs></MyPostedJobs></PrivateRouter>
        },
        {
            path: 'viewApplications/:job_id',
            element: <PrivateRouter><ViewApplications></ViewApplications></PrivateRouter>,
            loader: ({params})=>fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`)
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
  