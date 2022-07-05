import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUserModel } from 'app/models/loginUser.model';
import { UserModel } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  
  createUser(userRegister: UserModel) {
    return this.http.post('http://localhost:3000/auth/signup', userRegister);
  }

  getUsers() {
    return this.http.get('http://localhost:3000/users');
  }

  getUserFind(correo: string) {
    return this.http.get('http://localhost:3000/auth/'+ correo);
  }

  login(loginUser: LoginUserModel) {
    return this.http.post('http://localhost:3000/auth/signin', loginUser);
  }

  putProjectUser(id: any, data){
    return this.http.put('http://localhost:3000/auth/'+ id, data);
  }
}
