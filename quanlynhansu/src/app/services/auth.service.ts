import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }
  login(email:string, password:string){
    return new Promise((resolve, reject)=>{
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(userData => resolve(userData),
      err => reject(err));
    })
  }

  // Kiem tra tinh trang nguoi dung
  getAuth(){
    return this.afAuth.authState.map(auth => auth);
  }
  logout(){
    this.afAuth.auth.signOut();
  }
  register(email:string, password:string){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }

}
