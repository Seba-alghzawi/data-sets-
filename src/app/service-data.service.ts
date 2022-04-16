import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {

  constructor(private http:HttpClient,private roles:HttpClient) { }

  getdata(){
      return this.http.get('https://mocki.io/v1/ce5b7fd1-cb49-4864-b84d-e53c1f2900ed');
  }
  getroles()
  {
    return this.roles.get('https://mocki.io/v1/75ee2523-3bb3-4104-a9ad-7a36a710505f');
  }
}
