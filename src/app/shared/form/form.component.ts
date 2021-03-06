import { Component, EventEmitter, Output } from '@angular/core';
import { IMergeFields } from 'src/app/interfaces/merge-fields';
import { IUserForm } from 'src/app/interfaces/user-form';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  @Output() EmitForm = new EventEmitter<IUserForm>();

  form: IUserForm = {
    email_address: "",
    status: "pending",
    tags: ["Request"]
  }

  merge_fields: IMergeFields = {
    FNAME: "",
    LNAME: "",
    REQUEST: ""
  }
  constructor() { }

  onSubmit(form: IUserForm) {
    form.merge_fields = this.merge_fields;
    this.EmitForm.emit(form);
  }
}
