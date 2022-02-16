import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemInclude } from '../model/item-include.model';

@Injectable()
export class ItemsIncludeService {

   constructor(private http: HttpClient) {}

    public getItems(): Observable<ItemInclude[]> {
        return this.http.get<ItemInclude[]>("./assets/item-include.json");
    }
}