export const ROUTES = {
    HOME : "home",
    VIEW : "view",
    CAR : "car/:id"
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