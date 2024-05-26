import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CustomerModel} from "../models/customer.model";
import {map, Observable} from "rxjs";
import {ResponseModel} from "../models/response.model";

@Injectable({
  providedIn: 'root'
})
export class CustomerHttpService {

  constructor(private httpClient: HttpClient) { }
  url:string = "http://localhost:3000/customers";

  findAll(){
    return this.httpClient.get(this.url);
  }

  create(customer:CustomerModel){
    return this.httpClient.post<ResponseModel>(this.url, customer);
  }
}
