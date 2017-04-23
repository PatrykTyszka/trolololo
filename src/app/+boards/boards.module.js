"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var boards_component_1 = require("./boards.component");
var boards_routing_module_1 = require("./boards-routing.module");
var board_component_1 = require("./+board/board.component");
var board_show_component_1 = require("./+board_show/board_show.component");
var board_service_1 = require("../shared/services/board.service");
var BoardsModule = (function () {
    function BoardsModule() {
    }
    return BoardsModule;
}());
BoardsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            boards_routing_module_1.BoardsRoutingModule,
            http_1.HttpModule,
            http_1.JsonpModule,
        ],
        declarations: [
            boards_component_1.BoardsComponent,
            board_component_1.BoardComponent,
            board_show_component_1.BoardShowComponent,
        ],
        providers: [
            board_service_1.BoardService,
        ],
    })
], BoardsModule);
exports.BoardsModule = BoardsModule;
//# sourceMappingURL=boards.module.js.map