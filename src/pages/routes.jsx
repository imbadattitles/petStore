import CartModal from "./CartModal";
import GoodPage from "./GoodPage";
import MainPage from "./MainPage";
import modalOrPage from '../styles/cartPage/cart.module.sass'

export const pages = [
    {path: '/MainPage', component: <MainPage/>, exact: true},
    {path: '/MainPage/:itemNumber', component: <GoodPage/>, exact: true},
    {path: '/*', component: <MainPage/>, exact: true},
    {path: '/MainPage/cart', component: <CartModal modalOrPage={modalOrPage.main}/>, exact: true},
]