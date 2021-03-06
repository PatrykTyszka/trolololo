"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_service_1 = require("./+auth/services/auth.service");
var navbar_service_1 = require("./shared/services/navbar.service");
var notifications_service_1 = require("./shared/services/notifications.service");
var AppComponent = (function () {
    function AppComponent(authService, navbarService, notificationsService) {
        var _this = this;
        this.authService = authService;
        this.navbarService = navbarService;
        this.notificationsService = notificationsService;
        this.showNavbar = !!this.authService.loggedIn();
        this.navbarService.show().subscribe(function (val) { _this.showNavbar = val; });
    }
    AppComponent.prototype.signOut = function () {
        this.notificationsService.notice('Logout!');
        this.authService.logout();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss'],
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        navbar_service_1.NavbarService,
        notifications_service_1.NotificationsService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map