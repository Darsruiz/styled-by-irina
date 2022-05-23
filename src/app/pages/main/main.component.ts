import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/shared/interfaces/card';
import { HandleDataService } from 'src/app/services/handle-data.service';
import { IForm } from 'src/app/shared/interfaces/form';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  cards!: ICard[];
  isFormShown: boolean = false;
  isSubmitted: boolean = false
  constructor(private service: HandleDataService) { }

  ngOnInit(): void {
    this.service.getCards().subscribe(data => this.cards = data)
  }


  submitForm(form: IForm) {
    this.service.sendEmail(form);
    this.successfullySubmitted();
  }

  successfullySubmitted() {
    this.isFormShown = false;
    this.isSubmitted = true;
    setTimeout(() => {
      this.isSubmitted = false
    }, 3000);
  }
}
