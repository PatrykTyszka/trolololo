"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var boards_component_1 = require("./+boards/boards.component");
var page_not_found_component_1 = require("./+error_pages/+page_not_found/page_not_found.component");
var sign_in_component_1 = require("./+auth/+sign-in/sign-in.component");
var auth_guard_1 = require("./shared/auth.guard");
var appRoutes = [
    { path: 'boards', component: boards_component_1.BoardsComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'sign-in', component: sign_in_component_1.SignInComponent },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(appRoutes),
        ],
        exports: [router_1.RouterModule],
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map