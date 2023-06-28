import { Navigate, Route, Routes } from "react-router"
import { ROUTES } from "../constants/constants"
import { lazy } from "react"

const Home = lazy(() => import('../components/Home/Home'))

function Router(){
    return(
        <Routes>
            <Route path="*" element={<Navigate to={ROUTES.HOME}/>}/>
            <Route path={ROUTES.HOME} element={<Home/>}/>
            <Route path={ROUTES.VIEW} element={<p>place here view element</p>}/>
        </Routes>
    )
}

export default Router