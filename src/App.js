import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RootLayout} from "./pages/Layouts/RootLayout";
import {TermsOfServicePage} from "./pages/pages/TermsOfServicePage";
import {AboutPage} from "./pages/pages/AboutPage";
import {ContactPage} from "./pages/pages/ContactPage";
import {LegalPage} from "./pages/pages/LegalPage";
import {action as submitArticleAction, SubmitArticlePage} from "./pages/pages/SubmitArticlePage";
import {PendingArticlePage, loader as pendingArticleLoader, action as submitReviewRequest} from "./pages/pages/PendingArticlePage";
import {PendingArticleDetailPage, loader as pendingArticleDetailLoader, action  as sendReviewRequestTransaction
} from "./pages/pages/PendingArticleDetailPage";
import {PendingReviewsPage} from "./pages/pages/PendingReviewsPage";
import {PendingReviewDetailPage, loader as pendingReviewDetailPageLoader, action as sendFinalReviewTransaction} from "./pages/pages/PendingReviewDetailPage";
import {BlockChainExplorePage, loader as blockLoader} from "./pages/pages/BlockChainExplorePage";
import {BlockDetailPage, loader as blockDetailLoader} from "./pages/pages/BlockDetailPage";
import {HomeLayout} from "./pages/Layouts/HomeLayout";
import {HomePage} from "./pages/pages/HomePage";
import {VerifiedArticlesPage, loader as verifiedArticleLoader} from "./pages/pages/VerifiedArticlesPage";
import {ErrorPage} from "./pages/pages/error/ErrorPage";
import {VerifiedArticleDetailPage, loader as verifiedArticleDetailLoader} from "./pages/pages/VerifiedArticleDetailPage";
import {LoginPage, action as loginAction} from "./pages/pages/Login/LoginPage";
import {LogoutPage} from "./pages/pages/LogoutPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "/submit",
                children: [
                    {index: true, element: <SubmitArticlePage/>, action: submitArticleAction},
                ]
            },
            {
                path: "/pending-articles",
                children: [
                    {index: true, element: <PendingArticlePage/>, action:submitReviewRequest ,loader : pendingArticleLoader},
                    {path: ":referringTxId", element: <PendingArticleDetailPage/>, loader : pendingArticleDetailLoader, action: sendReviewRequestTransaction}
                ]
            },
            {
                path: "/pending-reviews",
                children: [
                    {index: true, element: <PendingReviewsPage/>},
                    {path: ":referringTxId", element: <PendingReviewDetailPage/>, loader: pendingReviewDetailPageLoader, action: sendFinalReviewTransaction}

                ]
            },
            {
                path: "/explore",
                children: [
                    {index: true, element: <BlockChainExplorePage/>, loader: blockLoader},
                    {path: ":indexNo", element: <BlockDetailPage/>, loader: blockDetailLoader}
                ],errorElement : <ErrorPage/>
            }
            ,
            {
                path: "/verified-articles",
                children: [
                    {index: true, element: <VerifiedArticlesPage/>, loader : verifiedArticleLoader},
                    {path: ":referringTxId", element: <VerifiedArticleDetailPage/>, loader : verifiedArticleDetailLoader},

                ]
            }
            ,
            {
                path: "/about",
                children: [
                    {index: true, element: <AboutPage/>},
                ]
            },
            {
                path: "/terms",
                children: [
                    {index: true, element: <TermsOfServicePage/>},
                ]
            },
            {
                path: "/contact",
                children: [
                    {index: true, element: <ContactPage/>},
                ]
            },
            {
                path: "/legal",
                children: [
                    {index: true, element: <LegalPage/>},
                ]
            },
            {
                path: "/login",
                children:[
                    {index: true, element: <LoginPage/>, action: loginAction}
                ]
            },
            {
                path: "/logout",
                children:[
                    {index: true, element: <LogoutPage/>}
                ]
            }
        ]
    },
    {
        path: "/",
        element: <HomeLayout/>,
        children: [
            {index: true, element: <HomePage/>}
        ]
    }
])

function App() {
    return <RouterProvider router={router}/>
}

export default App;
