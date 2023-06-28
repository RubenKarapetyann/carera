import { HEADER_ITEMS } from "../../constants/constants"
import HeaderItem from "./components/HeaderItem"
import style from "./Header.module.css"

function Header(){
    return(
        <header>
            {HEADER_ITEMS.map(item=><HeaderItem
                key={item.id} 
                text={item.displayName} 
                route={item.RouteName}
             />)}
        </header>
    )
}

export default Header