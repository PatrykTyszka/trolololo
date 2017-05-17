"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var boards_module_1 = require("./+boards/boards.module");
var notifications_component_1 = require("./shared/components/notifications/notifications.component");
var auth_module_1 = require("./+auth/auth.module");
var auth_guard_1 = require("./shared/auth.guard");
var page_not_found_component_1 = require("./+error_pages/+page_not_found/page_not_found.component");
var navbar_service_1 = require("./shared/services/navbar.service");
var notifications_service_1 = require("./shared/services/notifications.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            boards_module_1.BoardsModule,
            app_routing_module_1.AppRoutingModule,
            auth_module_1.AuthModule,
        ],
        declarations: [
            app_component_1.AppComponent,
            page_not_found_component_1.PageNotFoundComponent,
            notifications_component_1.NotificationsComponent,
        ],
        providers: [
            auth_guard_1.AuthGuard,
            navbar_service_1.NavbarService,
            notifications_service_1.NotificationsService,
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map