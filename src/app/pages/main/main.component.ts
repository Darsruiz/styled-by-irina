import { Component, OnInit } from '@angular/core';
import { HandleDataService } from 'src/app/services/handle-data.service';
import { IUserForm } from 'src/app/interfaces/user-form';
import { ICard } from 'src/app/interfaces/card';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  cards: Observable<ICard[]> | undefined;
  images: Observable<string[]> | undefined;
  isFormShown: boolean = false;
  isNewsletterShown: boolean = false;
  isSubmitted: boolean = false;
  constructor(private service: HandleDataService) { }

  ngOnInit(): void {
    this.cards = this.service.getCards()
    this.images = this.service.getImages()
  }


  submitForm(form: IUserForm) {
    this.service.sendEmail(form)
    this.successfullySubmitted();
  }

  successfullySubmitted() {
    this.isFormShown = false;
    this.isNewsletterShown = false;
    this.isSubmitted = true;
    setTimeout(() => {
      this.isSubmitted = false
    }, 3000);
  }
}
