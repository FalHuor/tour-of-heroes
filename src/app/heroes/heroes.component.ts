import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../hero-data'
import { HeroService } from '../hero.service'

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    displayPic: boolean;
    pictureURL: string;

    constructor(private heroService: HeroService) { 

    }

    ngOnInit() {
        this.getHeroes()
        this.displayPic = false
    }

    getHeroes(): void {
        this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    }

    displayPicture(url): void {
        console.log(url);
        this.displayPic = true
        this.pictureURL = url       
    }

    stopDisplayPicture(): void {
        this.displayPic = false
        this.pictureURL = ''
    }

}
