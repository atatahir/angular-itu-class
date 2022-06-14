import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon/services/pokemon.service';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.scss']
})
export class ExperimentComponent implements OnInit {

  person: string = 'Tahir';
  sentence!: string;

  constructor(private pokemanService: PokemonService) { }

  ngOnInit(): void {
    this.sentence = this.person + ' is here';
    const anotherQuestion = 'Where is everyone?';
    console.log(anotherQuestion);
  }

}
