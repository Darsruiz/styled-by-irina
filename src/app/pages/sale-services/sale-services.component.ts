import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICard } from 'src/app/interfaces/card';
import { HandleDataService } from 'src/app/services/handle-data.service';

@Component({
  selector: 'app-sale-services',
  templateUrl: './sale-services.component.html',
  styleUrls: ['./sale-services.component.scss']
})
export class SaleServicesComponent implements OnInit {

  cards: Observable<ICard[]> | undefined;
  constructor(private service: HandleDataService) {
    this.service.eventCallback$
      .subscribe(x => this.getCards(x))
  }

  ngOnInit(): void {
    this.cards = this.service.getCards();
  }

  getCards(lang: string) {
    this.cards = this.service.getCards(lang);
  }

}
