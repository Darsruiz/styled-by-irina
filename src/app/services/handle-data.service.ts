import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { ICard } from '../interfaces/card';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IUserForm } from '../interfaces/user-form';

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

  getImages(): Observable<string[]> {
    return this.httpClient
      .get<string[]>("assets/images/images.json")
      .pipe(retry(1), catchError(this.handleError));
  }
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
      console.log(`Error Obtaining Data: ${errorMessage}`)
    });
  }

  sendEmail(form: IUserForm) {
    // Pending Email Implementation
    this.createUser(form);
  }

  createUser(user: IUserForm): void {
    this.afs.collection<IUserForm>('user-collection').add(user)
      .then(result => {
        console.log(result)
      }).catch(err => this.handleError(err));
  }
}
