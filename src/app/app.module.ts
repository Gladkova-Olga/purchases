import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { UserComponent } from './user/user.component';
import { DataComponent } from './data/data.component';
import { DataModule } from './data/data.module';
import { BoldDirective } from './bold.directive';
import { WhileDirective } from './while.directive';
import { PurchasesComponent } from './purchases/purchases.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    UserComponent,
    BoldDirective,
    WhileDirective,
    PurchasesComponent,
    FormComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
