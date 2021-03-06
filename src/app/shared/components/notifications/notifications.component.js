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
var notifications_service_1 = require("./../../services/notifications.service");
var NotificationsComponent = (function () {
    function NotificationsComponent(notificationsService) {
        var _this = this;
        this.notificationsService = notificationsService;
        this.notificationsService.notificationListener().subscribe(function (response) {
            _this.message = response.msg;
            _this.className = "notify " + response.type;
        });
    }
    return NotificationsComponent;
}());
NotificationsComponent = __decorate([
    core_1.Component({
        selector: 'notify',
        templateUrl: './notifications.component.html',
        styleUrls: ['./notifications.component.scss'],
    }),
    __metadata("design:paramtypes", [notifications_service_1.NotificationsService])
], NotificationsComponent);
exports.NotificationsComponent = NotificationsComponent;
//# sourceMappingURL=notifications.component.js.map