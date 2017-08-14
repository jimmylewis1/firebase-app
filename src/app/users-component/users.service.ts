import { Injectable } from "@angular/core";
import { Http } from  '@angular/http';

@Injectable()
export class UsersService {
    constructor(private http: Http) {}
    // storeServers(servers: any[]) {
    //    return this.http.post('https://test-project-ng4.firebaseio.com/users.json', servers);
    // }
    users: any[];

    getUsers() {
        return this.http.get('https://test-project-ng4.firebaseio.com/users.json');
    }

    saveUser() {
        this.http.post('https://test-project-ng4.firebaseio.com/users.json', this.users);
        console.log('User added to database!');
    }
}
