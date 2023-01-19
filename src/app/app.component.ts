import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { Dummy } from './model/dummy';
import { DummyService } from './service/dummy.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'ng-wsj';
	public dummies: Observable<Dummy[]>;

	constructor(private dummyService: DummyService) {
		this.dummies = this.dummyService.getDummies();
	}
}
