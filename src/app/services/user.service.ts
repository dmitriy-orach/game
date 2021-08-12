import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private urlUsers: string = "http://localhost:3000/users";
  private usersData: User[] = this.getData();

  constructor(private http: HttpClient) {}

  public getData(): Observable<User[]> | any {
    return this.http.get(this.urlUsers);
  }

  public postNewUser(formValue): Observable<User> | any {
    let _damage: number;
    let _hp: number;
    switch(formValue.characterType) {
      case 'Knight': 
        _damage = 5;
        _hp = 100;
        break;
      case 'Archer': 
        _damage = 4;
        _hp = 80;
        break;
      case 'Mage': 
        _damage = 7;
        _hp = 50;
        break;
      case 'Druid': 
        _damage = 2;
        _hp = 120;
        break
    }

    return this.http.post(this.urlUsers, {
      id: this.usersData.length + 1,
      name: formValue.name,
      hero: formValue.characterType,
      level: 1,
      hp: _hp,
      experience: 0,
      damage: _damage
    });
  }
}
