import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoComponent } from './todo/todo.component';
import { ListComponent } from './list/list.component';
import { GridComponent } from './grid/grid.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    ListComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2CarouselamosModule
  ],
  providers: [ UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
