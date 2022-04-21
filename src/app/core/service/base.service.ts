import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export abstract class BaseService<T> {
  constructor(public http: HttpClient) {}

  public abstract getPathModule(): string;

  public create(obj: T): Observable<T> {
    console.log('URL - ', this.baseUrl);
    return this.http.post<T>(this.baseUrl, obj, { headers: this.headers });
  }

  public update(obj: T, id: number): Observable<T> {
    return this.http.put<T>(this.baseUrl + id, obj, { headers: this.headers });
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + id, { headers: this.headers });
  }

  public getList(): Observable<T[]> {
    return this.http.get<T[]>(this.baseUrl + 'list-all', { headers: this.headers });
  }

  public get baseUrl(): string {
    return environment.url.apiBaseUrl + this.getPathModule();
  }

  public get headers(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return headers;
  }
}
