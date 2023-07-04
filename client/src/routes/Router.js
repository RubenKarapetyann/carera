import { Navigate, Route, Routes } from "react-router"
import { ROUTES } from "../constants/constants"
import { lazy } from "react"

const Home = lazy(() => import('../components/Home/Home'))
const View = lazy(() => import('../components/View/View'))

function Router(){
    return(
        <Routes>
            <Route path="*" element={<Navigate to={ROUTES.HOME}/>}/>
            <Route path={ROUTES.HOME} element={<Home/>}/>
            <Route path={ROUTES.VIEW} element={<View/>}/>
        </Routes>
    )
}

export default Router