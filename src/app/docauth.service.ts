import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }

  authenticate(username:string, password:string){
    if(username=="shubhangi" && password=="H"){
      sessionStorage.setItem('username', username);
      return true;

    }else {
      return false;
    }
  }

  isUserLoggedIn(){
    console.log("Doctor Login Successfully..")
    let user=sessionStorage.getItem('username');
    console.log(user);
    return !(user==null);
  }

  logout(){
    console.log("Doctor Login Successfully..")
    sessionStorage.removeItem('username');
  }
}
