import { Navigate, Route, Routes } from "react-router"
import { ROUTES } from "../constants/constants"
import { lazy } from "react"

const Home = lazy(() => import('../components/Home/Home'))
const View = lazy(() => import('../components/View/View'))
const Car = lazy(()=>import("../components/Page3D/Page3D"))

function Router(){
    return(
        <Routes>
            <Route path="*" element={<Navigate to={ROUTES.HOME}/>}/>
            <Route path={ROUTES.HOME} element={<Home/>}/>
            <Route path={ROUTES.VIEW} element={<View/>}/>
            <Route path={ROUTES.CAR} element={<Car/>}/>
            <Route path={ROUTES.AUTOSERVICE} element={<p>hi from autoservice</p>}/>
        </Routes>
    )
}

export default Router