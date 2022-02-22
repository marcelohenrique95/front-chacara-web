import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';

@Injectable()
export class OrcamentoService {

   constructor(private http: HttpClient) {}

    public getOrcamento() {
        return this.http.get("./assets/item-include.json");
    }
}