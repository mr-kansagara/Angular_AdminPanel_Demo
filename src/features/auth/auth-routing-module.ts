import { RouterModule, Routes } from "@angular/router";

import { Register } from "./register/register";
import { ROUTES_ENUMS } from "../../constants/Endpoint.constant";
import { Login } from "./login/login";
import { NgModel } from "@angular/forms";
import { routes } from "../../app/app.routes";
import { NgModule } from "@angular/core";
import { authGuard } from "../../core/guards/auth-guard";

const authRoutes: Routes = [
  {path: ROUTES_ENUMS.LOGIN , component: Login , canActivate: [authGuard] },
  {path: ROUTES_ENUMS.REGISTER , component: Register , canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }