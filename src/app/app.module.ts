import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, MatSlideToggleModule, RouterOutlet, FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
