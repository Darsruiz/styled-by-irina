import { Component, Input } from '@angular/core';
import { ICard } from 'src/app/interfaces/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() card!: ICard;

  constructor() { }

}
