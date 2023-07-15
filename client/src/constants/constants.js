import Model1 from "../components/Page3D/components/models/Model1"
import { Model2 } from "../components/Page3D/components/models/Model2"
import { Model3 } from "../components/Page3D/components/models/Model3"

export const ROUTES = {
    HOME : "home",
    VIEW : "view",
    CAR : "car/:id",
    AUTOSERVICE : "autoservice/:id"
}

export const HEADER_ITEMS = [
    {
        displayName : "HOME",
        id : 1,
        RouteName : ROUTES.HOME
    },
    {
        displayName : "VIEW",
        id : 2,
        RouteName : ROUTES.VIEW
    }
]

export const CATEGORIES = [
    {
        name: "All Cars",
        activeName: "ALL CARS", 
        id: 1,
      },
      {
        name: "Current Year",
        activeName: "CURRENT YEAR",
        id: 2,
      },
      {
        name: "Previous Years",
        activeName: "PREVIOUS YEARS",
        id: 3,
      }
]


export const CARS_MODELS = {
  "S8" : (color)=><Model1 color={color}/>,
  "B2" : (color)=><Model2 color={color}/>,
  "G4" : (color)=><Model3 color={color}/>
}