"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import { Hero } from './hero'
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//   template: `
//     <h1>{{title}}</h1>
//     <h2>My favorite hero is: {{myHero.name}}</h2>
//     <input #newHero>
//     <button (click)="addHero(newHero.value); newHero.value=''">Add</button>
//     <p>Heroes:</p>
//     <ul>
//       <li *ngFor="let hero of heroes">
//         {{ hero.name }}
//       </li>
//     </ul>
//   `
// })
// export class AppComponent {
//   title: string;
//   myHero: Hero;
//   heroes: Array<Hero>;
//   clickMessage: string;
//   constructor() {
//     this.title = 'Tour of Heroes';
//     this.heroes = [
//       new Hero(1, 'Windstorm'),
//       new Hero(13, 'Bombasto'),
//       new Hero(15, 'Magneta'),
//       new Hero(20, 'Tornado'),
//     ];
//     this.myHero = this.heroes[0];
//   }
//   addHero(val: string) {
//     this.heroes.push(new Hero(10, val));
//   }
// }
//# sourceMappingURL=app.component.js.map