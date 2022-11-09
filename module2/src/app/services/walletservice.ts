import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Stock } from '../models/stock';
import { TokenStorageService } from '../services/token-storage.service';

const PORTFOLIO_API = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root',
})
export class WalletService {

  
 

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {}

  private httpOptions = {
    headers: new HttpHeaders()
    .set('Content-Type','application/json')
    //.set('Authorization', `Bearer `+ this.tokenStorage.getToken())
  };

  getBalance(): Observable<any> {
    //this.tokenStorage.getUser().id;
    return this.http.get(PORTFOLIO_API +"getWallet/"+ this.tokenStorage.getUser().id, this.httpOptions);
    
  }

  updateBalance(value: number): Observable<any>{
    console.log(value+" servie");
    //var dummy: Observable<any>;
    return this.http.put(PORTFOLIO_API+"updateWallet/"+
    this.tokenStorage.getUser().id + "/"+ value, this.httpOptions);
    //return dummy;
  }

  
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
