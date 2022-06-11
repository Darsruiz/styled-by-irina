import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, retry, Subject, throwError } from 'rxjs';
import { ICard } from '../interfaces/card';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IUserForm } from '../interfaces/user-form';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class HandleDataService {

  private eventCallback: Subject<string> = new Subject<string>();
  eventCallback$ = this.eventCallback.asObservable();

  private cards: ICard[] = [];
  private cardsSub: BehaviorSubject<ICard[]> = new BehaviorSubject<ICard[]>(this.cards);
  cards$: Observable<ICard[]> = this.cardsSub.asObservable();

  constructor(
    private httpClient: HttpClient,
    private afs: AngularFirestore,
    private translate: TranslateService) {
  }

  getCards(
    appLang = this.translate.currentLang
  ): Observable<ICard[]> {
    return this.httpClient
      .get<ICard[]>(`assets/cards-${appLang}.json`)
      .pipe(retry(1), catchError(this.handleError));
  };

  getImages(): Observable<string[]> {
    return this.httpClient
      .get<string[]>("assets/images/images.json")
      .pipe(retry(1), catchError(this.handleError));
  }

  getImages2(): Observable<string[]> { // split observable instead
    return this.httpClient
      .get<string[]>("assets/images/images-2.json")
      .pipe(retry(1), catchError(this.handleError));
  }

  setLang(lang: string) {
    this.translate.use(lang);
    this.eventCallback.next(lang);
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
