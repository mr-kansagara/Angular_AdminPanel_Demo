const AUTH_BASE : string = "auth"

export const ENDPOINTS = {
    AUTH: {
        BASE : AUTH_BASE,
        LOGIN : AUTH_BASE + "/login",
        REGISTER: AUTH_BASE + "/register"
    }
};

export enum ROUTES_ENUMS {
    LOGIN = "login",
    REGISTER = "register"
}