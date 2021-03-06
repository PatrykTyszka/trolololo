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
require("rxjs/add/operator/map");
var board_service_1 = require("../shared/services/board.service");
var notifications_service_1 = require("./../shared/services/notifications.service");
var BoardsComponent = (function () {
    function BoardsComponent(boardService, notificationsService) {
        this.boardService = boardService;
        this.notificationsService = notificationsService;
    }
    BoardsComponent.prototype.ngOnInit = function () { this.getBoards(); };
    BoardsComponent.prototype.getBoards = function () {
        var _this = this;
        this.boardService
            .getBoards()
            .subscribe(function (boards) { return _this.boards = boards; }, function (error) { return _this.errorMessage = error; });
    };
    BoardsComponent.prototype.addBoard = function (val) {
        var _this = this;
        this.titleError = null;
        this.boardService.create(val)
            .subscribe(function (board) {
            _this.notificationsService.notice("Board with id: " + board.id + " was successfully created!");
            _this.boards.push(board);
        }, function (response) {
            _this.addBoardError(response);
        });
    };
    BoardsComponent.prototype.destroyBoard = function (board_id) {
        var _this = this;
        this.boardService.destroy(board_id)
            .subscribe(function (board) { return _this.removeBoard(board.id); }, function (response) { return _this.errorMessage = response; });
    };
    BoardsComponent.prototype.removeBoard = function (board_id) {
        var indexToRemove = this.boards.findIndex(function (board) { return board.id == board_id; });
        this.boards.splice(indexToRemove, 1);
    };
    BoardsComponent.prototype.addBoardError = function (response) {
        var resp = response.json();
        if (resp.errors && resp.errors.title) {
            this.titleError = resp.errors.title;
        }
        else {
            throw 'Undefined error';
        }
    };
    return BoardsComponent;
}());
BoardsComponent = __decorate([
    core_1.Component({
        selector: 'boards-list',
        templateUrl: './boards.component.html',
        styleUrls: ['./boards.component.scss'],
    }),
    __metadata("design:paramtypes", [board_service_1.BoardService,
        notifications_service_1.NotificationsService])
], BoardsComponent);
exports.BoardsComponent = BoardsComponent;
//# sourceMappingURL=boards.component.js.map