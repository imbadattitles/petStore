import CartModal from "./CartModal";
import GoodPage from "./GoodPage";
import MainPage from "./MainPage";
import modalOrPage from '../styles/cartPage/cart.module.sass'
import LoginPage from "./LoginPage";

export const publicPages = [
    {path: '/MainPage', component: <MainPage/>, exact: true},
    {path: '/MainPage/login', component: <LoginPage/>, exact: true},
    {path: '/MainPage/:itemNumber', component: <GoodPage/>, exact: true},
    {path: '/*', component: <MainPage/>, exact: true},
    {path: '/MainPage/cart', component: <CartModal modalOrPage={modalOrPage.main}/>, exact: true},
]
export const privatPages = [
    {path: '/MainPage', component: <MainPage/>, exact: true},
    {path: '/MainPage/:itemNumber', component: <GoodPage/>, exact: true},
    {path: '/MainPage/login', component: <LoginPage/>, exact: true},
    {path: '/*', component: <MainPage/>, exact: true},
    {path: '/MainPage/cart', component: <CartModal modalOrPage={modalOrPage.main}/>, exact: true},
]