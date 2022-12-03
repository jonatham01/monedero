import { Component, OnInit } from '@angular/core';
import { Moneda } from 'src/app/modelos/moneda.model';
import { Monedero } from 'src/app/modelos/monedero.model';
import { StoreService } from 'src/app/servicios/store.service';

@Component({
  selector: 'app-monedero',
  templateUrl: './monedero.component.html',
  styleUrls: ['./monedero.component.scss']
})
export class MonederoComponent implements OnInit {

  monedero:Monedero[];

  miMonedero=[{
    nombre:1000,
    cantidad:0
  },{
    nombre:500,
    cantidad:0
  },{
    nombre:200,
    cantidad:0
  },
  {
    nombre:100,
    cantidad:0
  },{
    nombre:50,
    cantidad:0
  }
];

total=0;


valoresValidos:number[] =[
  1000,
  500,
  200,
  100
  ,50
];

validacion=false;
valido=true;
submit=false;

nombre:string="";
cantidad:string="";

mondedaEnvio:Monedero={
  cantidad:0,
  nombre:0,
  fecha: new Date(),
  total:0
  
}

  constructor(private store: StoreService) {
    this.monedero=this.store.mostrarMonedas();
  }
    
  ngOnInit(): void {
    this.store.miMonedero$.subscribe((monedero=>{
    
     monedero.map((data)=>{
      this.miMonedero.map((monedas)=>{
        if(monedas.nombre===data.nombre){
          monedas.cantidad+=data.cantidad;
          this.total+=data.total;
        }
      })
     })
    }))

  }

  
  enviarMonedas(){
    this.submit=true;
    this.valoresValidos.map((valor)=>{
      
      if(valor===Number(this.nombre)){
        this.mondedaEnvio={
          cantidad:Number(this.cantidad),
          nombre:Number(this.nombre),
          fecha: new Date(),
          total:Number(this.cantidad)*Number(this.nombre)
        }
        this.store.añadirMonedas(this.mondedaEnvio);
        this.nombre=""; 
        this.cantidad="";
        this.valido=false;
      }
      
    })
  }

}
