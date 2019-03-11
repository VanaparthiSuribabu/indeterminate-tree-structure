

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { TreeNodeComponent } from './tree-node/tree-node.component';



@NgModule({

imports: [

    BrowserModule,
    FormsModule,
],


declarations: [
     AppComponent,
    TreeNodeComponent
],
bootstrap: [
     AppComponent
]
})

export class AppModule {
}
