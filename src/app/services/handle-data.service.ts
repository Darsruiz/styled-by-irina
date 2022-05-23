import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { ICard } from '../shared/interfaces/card';
import { IForm } from '../shared/interfaces/form';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class HandleDataService {

  constructor(private httpClient: HttpClient, private afs: AngularFirestore) {

  }

  getCards(): Observable<ICard[]> {
    return this.httpClient
      .get<ICard[]>("assets/cards.json")
      .pipe(retry(1), catchError(this.handleError));
  };

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => {
      alert(`Error Obtaining Data: ${errorMessage}`)
    });
  }

  sendEmail(form: IForm) {
    // Pending Email Implementation
    this.createUser(form);
  }

  createUser(user: IForm): void {
    this.afs.collection<IForm>('user-collection').add(user)
      .then(result => {
        console.log(result)
      }).catch(err => console.log(err));
  }
}
