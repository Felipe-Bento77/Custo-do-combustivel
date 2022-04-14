import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   precoDaGasolina: number = 0;
   distanciaDaViagem: number = 0;
   consumoDoCarro: number = 0;
   custo: number = 0;
  constructor() {}

   calcularCustoDaViagem(){
   this.custo=  (this.distanciaDaViagem/this.consumoDoCarro) * this.precoDaGasolina;
   }
}
