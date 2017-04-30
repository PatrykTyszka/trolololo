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
var http_1 = require("@angular/http");
var angular2_jwt_1 = require("angular2-jwt");
var http_2 = require("@angular/http");
var router_1 = require("@angular/router");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var navbar_service_1 = require("../../shared/services/navbar.service");
var AuthService = (function () {
    function AuthService(http, navbarService, router) {
        this.http = http;
        this.navbarService = navbarService;
        this.router = router;
        this.headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        this.options = new http_2.RequestOptions({ headers: this.headers });
    }
    AuthService.prototype.signIn = function (credentials) {
        var _this = this;
        var data = { 'auth': { 'email': credentials.email, 'password': credentials.password } };
        return this.http.post('http://localhost:3000/api/v1/auth/auth_token', data, this.options)
            .map(function (resp) { return _this.setJwtToken(resp); })
            .map(function (token) { return _this.setToken(token); });
    };
    AuthService.prototype.loggedIn = function () {
        return angular2_jwt_1.tokenNotExpired();
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('id_token');
        this.navbarService.setFlag({ navbar: false });
        this.router.navigate(['/sign-in']);
    };
    AuthService.prototype.setToken = function (jwt) {
        localStorage.setItem('id_token', jwt);
        return jwt;
    };
    AuthService.prototype.setJwtToken = function (resp) {
        var response = resp.json();
        if (!response.jwt) {
            throw Error('JWT token missing');
        }
        return response.jwt;
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        navbar_service_1.NavbarService,
        router_1.Router])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map