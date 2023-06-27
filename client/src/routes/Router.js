import { Navigate, Route, Routes } from "react-router"
import { ROUTES } from "../constants/constants"


function Router(){
    return(
        <Routes>
            <Route path="*" element={<Navigate to={ROUTES.HOME}/>}/>
            <Route path={ROUTES.HOME} element={<p>place here home element</p>}/>
            <Route path={ROUTES.VIEW} element={<p>place here view element</p>}/>
        </Routes>
    )
}

export default Router