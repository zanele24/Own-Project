import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { NavbarComponent } from './Components/Shared/navbar/navbar.component';
import { LandingComponent } from './Components/Private/landing/landing.component';
import { HomeComponent } from './Components/Private/home/home.component';
import { SignupComponent } from './Components/Private/signup/signup.component';
import { SigninComponent } from './Components/Private/signin/signin.component';
import { ModalComponent } from './Components/Private/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './Components/Shared/alert/alert.component';

//PrimeNG imports
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    LandingComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    ModalComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    
    //Imports from PrimeNG
    ConfirmDialogModule,
    MessagesModule,
    ToastModule,
    DynamicDialogModule,
    DialogModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
  ],
  providers: [ MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
