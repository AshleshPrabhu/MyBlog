import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'

import { AuthLayout} from './components/index.js'
import Login from './pages/Login.jsx'
// const LazyLogin = React.lazy(() => import('./components/index.js'))
// import AddPost from "./pages/AddPost";
const LazyAddPost = React.lazy(() => import('./pages/AddPost'))
// import Signup from './pages/Signup'
const LazySignup = React.lazy(() => import('./pages/Signup'))
// import EditPost from "./pages/EditPost";
const LazyEdit = React.lazy(() => import('./pages/EditPost'))
// import Post from "./pages/Post";
const LazyPost = React.lazy(() => import('./pages/Post'))
// import AllPosts from "./pages/AllPosts";
const LazyAllPosts = React.lazy(() => import('./pages/AllPosts'))
// import NoElement from './pages/NoElement.jsx'
const LazyNoElement = React.lazy(() => import('./pages/NoElement'))
// import ForgotPassword from './components/ForgotPassword.jsx'
const LazyForgotPassword = React.lazy(() => import('./components/ForgotPassword'))
// import PasswordReset from './components/PasswordReset.jsx'
const LazyPasswordReset = React.lazy(() => import('./components/PasswordReset'))


const LazyHelp = React.lazy(() => import('./components/Footer/Help.jsx'))
const LazyAffiliate = React.lazy(() => import('./components/Footer/Affiliate.jsx'))
const LazyContact = React.lazy(() => import('./components/Footer/Contact.jsx'))
const LazyPrivacy = React.lazy(() => import('./components/Footer/Privacy.jsx'))
const LazyTerms = React.lazy(() => import('./components/Footer/TermsAndCondition.jsx'))
const LazyAccount = React.lazy(() => import('./components/Footer/Account.jsx'))
const LazyLicense = React.lazy(() => import('./components/Footer/Licensing.jsx'))
const LazyPricing = React.lazy(() => import('./components/Footer/Pricing.jsx'))
const LazyFeature = React.lazy(() => import('./components/Footer/Features.jsx'))




const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: (
                    <AuthLayout authentication={false}>
                            <Login/>
                    </AuthLayout>
                ),
            },
            {
                path: "/signup",
                element: (
                    <React.Suspense fallback={<>Loading...</>}>
                        <AuthLayout authentication={false}>
                            <LazySignup/>
                        </AuthLayout>
                    </React.Suspense>
                ),
            },
            {
                path: "/all-posts",
                element: (
                    <React.Suspense fallback={<>Loading...</>}>
                        <AuthLayout authentication>
                            {" "}
                            <LazyAllPosts />
                        </AuthLayout>
                    </React.Suspense>
                ),
            },
            {
                path: "/add-post",
                element: (
                    <React.Suspense fallback={<>Loading...</>}>
                        <AuthLayout authentication>
                            {" "}
                            <LazyAddPost /> 
                        </AuthLayout>
                    </React.Suspense> 
                ),
            },
            {
                path: "/edit-post/:slug",
                element: (
                    <React.Suspense fallback={<>Loading...</>}>
                        <AuthLayout authentication>
                            {" "}
                            <LazyEdit />
                        </AuthLayout>
                    </React.Suspense>
                ),
            },
            {
                path: "/post/:slug",
                element:( 
                    <React.Suspense fallback={<>Loading...</>}>
                        <LazyPost/>
                    </React.Suspense>
                    ),
            },
            {
                path: "/forgot-password",
                element: (
                    <React.Suspense fallback={<>Loading...</>}>
                        <LazyForgotPassword/>
                    </React.Suspense>
                    ),
            },
            {
                path: "/reset-password",
                element: (
                    <React.Suspense fallback={<>Loading...</>}>
                        <LazyPasswordReset/>
                    </React.Suspense>
                    ),
            },
            {
                path: "*",
                element: (
                    <React.Suspense fallback={<>Loading...</>}>
                        <LazyNoElement/>
                    </React.Suspense>
                    ),
            },
            {
                path: "/help",
                element: (
                    <React.Suspense fallback={<>Loading...</>}>
                        <LazyHelp/>
                    </React.Suspense>
                    ),
            },
            {
                path: "/affiliate",
                element: (
                    <React.Suspense fallback={<>Loading...</>}>
                        <LazyAffiliate/>
                    </React.Suspense>
                    ),
            },
            {
                path: "/contact",
                element: (
                    <React.Suspense fallback={<>Loading...</>}>
                        <LazyContact/>
                    </React.Suspense>
                    ),
            },
            {
                path: "/privacy",
                element: (
                    <React.Suspense fallback={<>Loading...</>}>
                        <LazyPrivacy/>
                    </React.Suspense>
                    ),
            },
            {
                path: "/terms",
                element: (
                    <React.Suspense fallback={<>Loading...</>}>
                        <LazyTerms/>
                    </React.Suspense>
                    ),
            },
            {
                path: "/account",
                element: (
                    <React.Suspense fallback={<>Loading...</>}>
                        <LazyAccount/>
                    </React.Suspense>
                    ),
            },
            {
                path: "/license",
                element: (
                    <React.Suspense fallback={<>Loading...</>}>
                        <LazyLicense/>
                    </React.Suspense>
                    ),
            },
            {
                path: "/pricing",
                element: (
                    <React.Suspense fallback={<>Loading...</>}>
                        <LazyPricing/>
                    </React.Suspense>
                    ),
            },
            {
                path: "/features",
                element: (
                    <React.Suspense fallback={<>Loading...</>}>
                        <LazyFeature/>
                    </React.Suspense>
                    ),
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>,
)

{/* <React.Suspense fallback={<>Loading...</>}>
                        <AuthLayout authentication={false}>
                            <LazyLogin/>
                        </AuthLayout>
                    </React.Suspense> */}

