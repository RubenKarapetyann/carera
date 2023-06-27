import { NavLink } from "react-router-dom"
import style from "../Header.module.css"


const HeaderItem = ({ text, route })=>{
    return(
        <div className={style["header-item"]}>
            <NavLink 
                style={({ isActive })=>{
                    return {
                        color : isActive ? "var(--gamboge)" :"#FFFFFF"
                    }
                }}
                to={route}
            >{text}</NavLink>
        </div>
    )
}
export default HeaderItem