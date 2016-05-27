import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
}


/*“take each hero in the heroes array, store it in the local hero variable, and make it available to the corresponding template instance”.*/
@Component({
    selector: 'my-app',
    template:`
    <h2>My Heroes</h2>
    <ul class="heroes">
        <li *ngFor="let hero of heroes"> <span class="badge">{{hero.id}}</span> {{hero.name}}</li>
    </ul>
    `
})
export class AppComponent {
    title = 'Tour of Heroes';
    heroes = HEROES;
}

var HEROES: Hero[] = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */