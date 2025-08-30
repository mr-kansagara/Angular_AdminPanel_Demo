import { RouterModule, Routes } from "@angular/router";

import { Register } from "./register/register";
import { ENDPOINTS } from "../../constants/Endpoint.constant";
import { Login } from "./login/login";
import { NgModel } from "@angular/forms";

const authRoutes: Routes = [
  {path: 'login' , component: Login},
  {path: 'register' , component: Register},
];

export const AuthRoutingModule = RouterModule.forChild(authRoutes);
