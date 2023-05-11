import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  serverUrl = 'http://localhost:3000/users';

  private readonly users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor(private readonly httpClient: HttpClient) {}

  fetchUsers() {
    this.httpClient.get<User[]>(this.serverUrl).subscribe(fetchedUsers => this.users$.next(fetchedUsers))
  }

  get users(): Observable<User[]> {
    return this.users$.asObservable();
  }

  addUser(user: User){
    return this.httpClient.post<User>(this.serverUrl, user);
  }

  editUser(user: User, id: string){
    return this.httpClient.put<User>(`${this.serverUrl}/${id}`, user)
  }
}
