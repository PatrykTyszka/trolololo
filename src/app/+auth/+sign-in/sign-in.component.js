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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var auth_service_1 = require("../services/auth.service");
var navbar_service_1 = require("../../shared/services/navbar.service");
var notifications_service_1 = require("./../../shared/services/notifications.service");
var SignInComponent = (function () {
    function SignInComponent(fb, authService, _location, router, navbarService, notificationsService) {
        this.fb = fb;
        this.authService = authService;
        this._location = _location;
        this.router = router;
        this.navbarService = navbarService;
        this.notificationsService = notificationsService;
        if (this.authService.loggedIn()) {
            this._location.back();
        }
        this.form = fb.group({
            email: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required],
        });
    }
    SignInComponent.prototype.submitForm = function (value) {
        var _this = this;
        this.authService.signIn({ email: value.email, password: value.password })
            .subscribe(function (auth) { return _this.onSuccess(auth); }, function (error) { return _this.onError(error); });
    };
    SignInComponent.prototype.onSuccess = function (jwt) {
        this.notificationsService.notice('Logged In!');
        this.navbarService.setFlag(true);
        this.router.navigate(['/boards']);
    };
    SignInComponent.prototype.onError = function (error) {
        this.notificationsService.alert('Invalid email or password!');
    };
    return SignInComponent;
}());
SignInComponent = __decorate([
    core_1.Component({
        selector: 'sign-in',
        templateUrl: './sign-in.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        auth_service_1.AuthService,
        common_1.Location,
        router_1.Router,
        navbar_service_1.NavbarService,
        notifications_service_1.NotificationsService])
], SignInComponent);
exports.SignInComponent = SignInComponent;
//# sourceMappingURL=sign-in.component.js.map