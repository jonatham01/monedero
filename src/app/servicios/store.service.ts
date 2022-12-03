import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Moneda } from '../modelos/moneda.model';
import { Monedero } from '../modelos/monedero.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private miStoreMonedero:Monedero[]=[];

/*
  private miStoreMonedero: Moneda[]=[{
    mil:{cantidad:20,nombre:1000},
    quinientos:{cantidad:100,nombre:500},
    doscientos:{cantidad:0,nombre:200},
    cien:{cantidad:10,nombre:100},
    cincuenta:{cantidad:20,nombre:1000},
    fecha:new Date(),
    total:72000
  }];
*/
  private miMonedero=new BehaviorSubject<Monedero[]>([
    {
      cantidad:20,
      nombre:1000,
      fecha: new Date(),
      total:20000
    },{
      cantidad:100,
      nombre:500,
      fecha: new Date(),
      total:50000
    },{
      cantidad:10,
      nombre:100,
      fecha: new Date(),
      total:1000
    },{
      cantidad:20,
      nombre:50,
      fecha: new Date(),
      total:1000
    }
  ]);
  miMonedero$= this.miMonedero.asObservable();


  constructor() { }

  añadirMonedas(monedas:Monedero){
    this.miStoreMonedero.push(monedas);
    this.miMonedero.next(this.miStoreMonedero);
  }
  mostrarMonedas():Monedero[] {
    return this.miStoreMonedero;
  }
}
