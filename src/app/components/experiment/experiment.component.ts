import { Component, OnInit } from '@angular/core';
import { filter, map, Observable, ObservedValueOf, take, tap } from 'rxjs';
import { PokemonService } from '../pokemon/services/pokemon.service';
import { ExperimentStateService } from './services/experiment-state.service';
import { InventorsData, Inventor } from './utils';  //using index.ts to get access to all files

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.scss']
})
export class ExperimentComponent implements OnInit {

  person: string = 'Tahir';
  sentence!: string;
  inventorDetails!: string[];
  secondCounter$!: Observable<number>;
  isOdd$!: Observable<boolean>;
  isEven$!: Observable<boolean>;
  notdivisibleBy5$!: Observable<number>;
  //inventor: Inventor[];

  constructor(private experimentStateService: ExperimentStateService) { }

  ngOnInit(): void {
    this.sentence = this.person + ' is here';
    const anotherQuestion = 'Where is everyone?';
    console.log(anotherQuestion);
    this.secondCounter$ = this.experimentStateService.sourceCounter$;

    //create a new array of strings with inventor first last and birth date
    this.inventorDetails = InventorsData.map(inventor => {  //remove {} to autmaticall yreturn without using return keyword
      return inventor.first + ' ' + inventor.last + ' was born in ' + inventor.year
    })

    this.inventorDetails.forEach(element => {
      console.log(element);
    });

    this.isOdd$ = this.secondCounter$.pipe(map((num:number) => {
      return !isEven(num);
    }));

    this.isOdd$.subscribe((answer:boolean) => {
      console.log(answer);
    })

    this.isEven$ = this.secondCounter$.pipe(map((num:number) => {
      return isEven(num);
    }));

    this.isEven$.subscribe((answer:boolean) => {
      console.log(answer);
    })

    this.notdivisibleBy5$ = this.secondCounter$.pipe(
      tap((num: number) => console.log(num)),
      filter((num: number) => num % 5 !== 0),
      take(20));
    

    function isEven(num: number) {
      return true;
    }
  }



}