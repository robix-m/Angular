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
import { LineChartComponent } from './line-chart/line-chart.component';

import { ChartsModule } from 'ng2-charts';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    ListComponent,
    GridComponent,
    LineChartComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2CarouselamosModule,
    ChartsModule
  ],
  providers: [ UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
