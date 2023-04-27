import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DataComponent } from './data.component';



@NgModule({
  declarations: [DataComponent],
  imports: [
    CommonModule, BrowserModule, FormsModule
  ],
  exports: [DataComponent]
})
export class DataModule { }
