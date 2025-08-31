const AUTH_BASE : string = "auth"
const DASHBOARD_BASE : string = "dashboard"

export const ENDPOINTS = {
    AUTH: {
        BASE : AUTH_BASE,
        LOGIN : AUTH_BASE + "/login",
        REGISTER: AUTH_BASE + "/register"
    },
    DASHBOARD :{
        BASE : DASHBOARD_BASE,
        HOME : DASHBOARD_BASE + "/home"
    }
};

export enum ROUTES_ENUMS {
    LOGIN = "login",
    REGISTER = "register",
    HOME = "home"
}