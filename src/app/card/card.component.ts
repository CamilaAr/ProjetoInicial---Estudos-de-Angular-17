import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent  
//implements AfterViewInit
{
plano : any = {
  infos: {
    tipo: 'simples',
    preco: 300,
  }, teste: undefined,
  //infos: undefined;

} 
 
 /*
  tipo = 'Simples';
  preco = 500;
  
 
 
  ngOnInit(){
    this.tipo = 'Simples';
  }

  ngAfterViewInit() {
   
   //this.tipo =  'sinm'   ;
  }

  getFullPrice(){
    
    
    return 'R$' + this.preco + ',00/MÊS';
  }
  */
}
