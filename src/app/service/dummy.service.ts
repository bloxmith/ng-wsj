import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Dummy } from '../model/dummy';

@Injectable({
	providedIn: 'root'
})
export class DummyService {

	constructor(private http: HttpClient) { }

	getDummies(): Observable<Dummy[]> {
		return this.http.get<Dummy[]>('/assets/dummies.json');
	}
}
