import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { ICard } from '../shared/interfaces/card';
import { IForm } from '../shared/interfaces/form';

@Injectable({
  providedIn: 'root'
})
export class HandleDataService {

  constructor(private httpClient: HttpClient, private angularFirestore: AngularFirestore) {

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

  createUser(user: IForm) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection('user-collection')
        .add(user)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => reject(error)
        );
    });
  }
}
