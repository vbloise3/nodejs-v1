/**
 * Created by vincebloise on 12/22/16.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  AppComponent   from './app.component';

//add my own component
import  YoMoFoComponent  from './yo-mo-fo';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, YoMoFoComponent ],
    bootstrap:    [ AppComponent, YoMoFoComponent ]
})
export class AppModule { }