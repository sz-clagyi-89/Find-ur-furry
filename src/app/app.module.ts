import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DogComponent } from './dog/dog.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { DogListComponent } from './dog/dog-list/dog-list.component';
import { DogDetailComponent } from './dog/dog-detail/dog-detail.component';
import { DogItemComponent } from './dog/dog-list/dog-item/dog-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingItemComponent } from './shopping-list/shopping-item/shopping-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DogComponent,
    HeaderComponent,
    ShoppingListComponent,
    DogListComponent,
    DogDetailComponent,
    DogItemComponent,
    ShoppingEditComponent,
    ShoppingItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
