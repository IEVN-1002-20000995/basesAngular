import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',     /* Nombre del componente */
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  productos:any[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas",
      "Precio": 20000,
      "Year":2023,
      "Marca":"NISSAN",
      "Color":"Azul",
      "ImagenURL":""
    },
    {
      "productoId":2,
      "Modelo":"A4",
      "Descripcion":"4 puertas",
      "Precio": 30000,
      "Year":2022,
      "Marca":"AUDI",
      "Color":"Azul",
      "ImagenURL":""
    },
    {
      "productoId":3,
      "Modelo":"Rio",
      "Descripcion":"4 puertas",
      "Precio": 150000,
      "Year":2020,
      "Marca":"KIA",
      "Color":"Azul",
      "ImagenURL":""
    },
  ]

}
