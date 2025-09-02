const AUTH_BASE : string = "auth"
const DASHBOARD_BASE : string = "dashboard"
const PRODUCTS_BASE : string = "products"
const NGXFLOW_BASE : string = "ngx-flow-demo"
const CUSTOM_NODES_BASE : string = "custom-nodes"

export const ENDPOINTS = {
    AUTH: {
        BASE : AUTH_BASE,
        LOGIN : AUTH_BASE + "/login",
        REGISTER: AUTH_BASE + "/register"
    },
    DASHBOARD :{
        BASE : DASHBOARD_BASE,
        HOME : DASHBOARD_BASE + "/home"
    },
    PRODUCTS: {
        BASE: PRODUCTS_BASE,
        LIST: PRODUCTS_BASE + "/list"
    },
    NGXFLOW: {
        BASE: NGXFLOW_BASE,
        PLAYGROUND: NGXFLOW_BASE + "/playground"
    },
    CUSTOME_NODES: {
        BASE: CUSTOM_NODES_BASE,
        HANDLING: CUSTOM_NODES_BASE + "/CustomeNodehandling",
        DELETE_SELECTED: CUSTOM_NODES_BASE + "/DeleteSelected"
    }

};

export enum ROUTES_ENUMS {
    LOGIN = "login",
    REGISTER = "register",
    HOME = "home",
    PRODUCT_LIST = "list",
    NGXFLOW_PLAYGROUND = "playground",
    CUSTOME_NODES = "CustomeNodehandling",
    DELETE_SELECTED = "DeleteSelected"
    

}