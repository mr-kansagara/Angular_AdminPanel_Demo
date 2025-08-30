import { RouterModule, Routes } from "@angular/router";

import { Register } from "./register/register";
import { ROUTES_ENUMS } from "../../constants/Endpoint.constant";
import { Login } from "./login/login";
import { NgModel } from "@angular/forms";

const authRoutes: Routes = [
  {path: ROUTES_ENUMS.LOGIN , component: Login},
  {path: ROUTES_ENUMS.REGISTER , component: Register},
];

export const AuthRoutingModule = RouterModule.forChild(authRoutes);
