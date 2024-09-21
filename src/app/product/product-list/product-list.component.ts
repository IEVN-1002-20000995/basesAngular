import { Component } from '@angular/core';
import { IProductos } from '../productos';

@Component({
  selector: 'app-product-list',     /* Nombre del componente */
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
//*ngIf=true, o false   Hace una accion si es verdadero o falso

imageWidth:number=60;
imageMargin:number=2;
muestraImg:boolean=true;
listFilter:string=''

muestImg():void{                  
  this.muestraImg=!this.muestraImg  //operador ternario !
}

  productos:IProductos[]=[       //esto es type scrip | es un arreglo de objetos
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas",
      "Precio": 20000,
      "Year":"febrero 2 2023",
      "Marca":"NISSAN",
      "Color":"Azul",
      "ImagenUrl":"https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_0c7166c16ff74073b65851f7f0b360ed.jpg"
    },
    {
      "productoId":2,
      "Modelo":"A4",
      "Descripcion":"4 puertas",
      "Precio": 30000,
      "Year":"marzo 23 2022",
      "Marca":"AUDI",
      "Color":"Azul",
      "ImagenUrl":"https://acnews.blob.core.windows.net/imgnews/medium/NAZ_3a2049521d694131ac5fa4632c7d8325.jpg"
    },
    {
      "productoId":3,
      "Modelo":"Rio",
      "Descripcion":"4 puertas",
      "Precio": 150000,
      "Year":"septiembre 5 2020",
      "Marca":"KIA",
      "Color":"Azul",
      "ImagenUrl":"https://cdn.buttercms.com/JATRezqBSzmBK1jOXk4q"
    }
  ]
}