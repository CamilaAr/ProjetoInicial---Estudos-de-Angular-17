import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { Card2Component } from '../card-2/card-2.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { Card2ButtonComponent } from '../card-2-button/card-2-button.component';
import { CardButtonCancelComponent } from '../card-button-cancel/card-button-cancel.component';
import {MatSliderModule} from '@angular/material/slider';



@NgModule({
  declarations: [
    CardComponent,
    Card2Component,
    CardButtonComponent,
    Card2ButtonComponent,
    CardButtonCancelComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule
    
  ],
  exports: [
    CardComponent,
    Card2Component,
   // CardButtonComponent,
    //Card2ButtonComponent
  ],
})
export class CardsModule { }
