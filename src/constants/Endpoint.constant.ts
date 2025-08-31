const AUTH_BASE : string = "auth"
const DASHBOARD_BASE : string = "dashboard"
const PRODUCTS_BASE : string = "products"

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
    }
};

export enum ROUTES_ENUMS {
    LOGIN = "login",
    REGISTER = "register",
    HOME = "home",
    PRODUCT_LIST = "list"

}