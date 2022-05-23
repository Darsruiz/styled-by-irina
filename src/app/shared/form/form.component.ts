import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IForm } from '../interfaces/form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() EmitForm = new EventEmitter<IForm>();

  form: IForm = {
    name: "",
    email: "",
    description: ""
  }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: IForm) {
    this.EmitForm.emit(form)
  }
}
