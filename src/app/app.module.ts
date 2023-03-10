import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DummyService } from './service/dummy.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule
	],
	providers: [
		DummyService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
