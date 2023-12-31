import { Navigate, Route, Routes } from "react-router"
import { ROUTES } from "../constants/constants"
import { lazy } from "react"

const Home = lazy(() => import('../components/Home/Home'))
const View = lazy(() => import('../components/View/View'))
const Car = lazy(()=>import("../components/Page3D/Page3D"))
const Autoservice = lazy(() => import("../components/Autoservice/Autoservice"))

function Router(){
    return(
        <Routes>
            <Route path="*" element={<Navigate to={ROUTES.HOME}/>}/>
            <Route path={ROUTES.HOME} element={<Home/>}/>
            <Route path={ROUTES.VIEW} element={<View/>}/>
            <Route path={ROUTES.CAR} element={<Car/>}/>
            <Route path={ROUTES.AUTOSERVICE} element={<Autoservice/>}/>
        </Routes>
    )
}

export default Router