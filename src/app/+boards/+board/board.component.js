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
var router_1 = require("@angular/router");
var board_service_1 = require("../../shared/services/board.service");
var board_1 = require("../board");
var BoardComponent = (function () {
    function BoardComponent(router, boardService) {
        this.router = router;
        this.boardService = boardService;
        this.onDestroyBoard = new core_1.EventEmitter();
    }
    BoardComponent.prototype.onSelect = function (board_id) {
        this.router.navigate(['/boards', board_id]);
    };
    BoardComponent.prototype.onDelete = function (board_id) {
        this.onDestroyBoard.emit(board_id);
    };
    return BoardComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", board_1.Board)
], BoardComponent.prototype, "board", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BoardComponent.prototype, "onDestroyBoard", void 0);
BoardComponent = __decorate([
    core_1.Component({
        selector: 'board',
        templateUrl: './board.component.html',
        styleUrls: ['./board.component.scss'],
    }),
    __metadata("design:paramtypes", [router_1.Router,
        board_service_1.BoardService])
], BoardComponent);
exports.BoardComponent = BoardComponent;
//# sourceMappingURL=board.component.js.map