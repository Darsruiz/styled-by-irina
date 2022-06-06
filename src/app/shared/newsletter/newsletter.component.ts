import { Component, EventEmitter, Output } from '@angular/core';
import { IUserForm } from 'src/app/interfaces/user-form';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent {

  @Output() EmitForm = new EventEmitter<IUserForm>();

  form: IUserForm = {
    email_address: "",
    status: "pending",
    tags: ["Newsletter"]
  }

  constructor() { }

  onSubmit(form: IUserForm) {
    this.EmitForm.emit(form);
  }
}
