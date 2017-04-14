import { Component } from '@angular/core';

// import { Hero } from './hero'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {

}
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
