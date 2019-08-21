import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        debugger;
        if(username == 'admin' || username=="patient"){
            let user={ username :username, password:password};
            localStorage.setItem('currentUser', JSON.stringify(user));
            return user;
        }
        return null;

        // return { username :'admin', password:'password'};
        // return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username, password })
        //     .pipe(map(user => {
        //         // login successful if there's a jwt token in the response
        //         if (user && user.token) {
        //             // store user details and jwt token in local storage to keep user logged in between page refreshes
        //             localStorage.setItem('currentUser', JSON.stringify(user));
        //         }

        //         return user;
        //     }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}