import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddReview from "../Pages/AddReview";
import AllReviews from "../Pages/AllReviews";
import PrivateRoute from './../Private/PrivateRoute';
import ReviewDetails from "../Pages/ReviewDetails";
import MyReview from "../Pages/MyReview";
import UpdateReview from "../Pages/UpdateReview";
import WatchList from "../Pages/WatchList";
import ErrorPage from "../Pages/ErrorPage";



const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/addReviews',
                element:<PrivateRoute><AddReview/></PrivateRoute>
            },
            {
                path:'/allReviews',
                element:<AllReviews/>,
                loader:()=>fetch('https://chill-gamer-server-sage.vercel.app/reviews')
            },
            {
                path:'/reviewDetails/:id',
                element:<ReviewDetails/>,
                loader:({params})=>fetch(`https://chill-gamer-server-sage.vercel.app/reviewDetails/${params.id}`)
            },
            {
                path:'/myReviews/:email',
                element:<PrivateRoute><MyReview/></PrivateRoute>,
                loader:({params})=>fetch(`https://chill-gamer-server-sage.vercel.app/myReviews/${params.email}`)
            },
            {
                path:'/updateReview/:id',
                element:<PrivateRoute><UpdateReview/></PrivateRoute>,
                loader:({params})=>fetch(`https://chill-gamer-server-sage.vercel.app/reviewDetails/${params.id}`)
            },
            {
                path:'/gameWatchList/:email',
                element:<PrivateRoute><WatchList/></PrivateRoute>,
                loader:({params})=> fetch(`https://chill-gamer-server-sage.vercel.app/watchList/${params.email}`)
            }
        ]
    }
])
export default router