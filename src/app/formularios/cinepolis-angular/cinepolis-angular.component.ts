import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cinepolis-angular',
  templateUrl: './cinepolis-angular.component.html',
  styleUrls: ['./cinepolis-angular.component.css']
})
export class CinepolisAngularComponent implements OnInit {
  cinepolisForm!: FormGroup;
  valorPagar: number = 0;
  precioBoleto: number = 12;

  ngOnInit(): void {
    this.cinepolisForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      compradores: new FormControl(1, [Validators.required, Validators.min(1)]),
      cineco: new FormControl(false),
      cantidadBoletos: new FormControl(1, [Validators.required, Validators.min(1)])
    });
  }

  get maxBoletos(): number {
    return this.cinepolisForm.value.compradores * 7;
  }

  procesar(): void {
    if (this.cinepolisForm.invalid) {
      alert('Por favor, ingrese valores válidos.');
      return;
    }

    let cantidadBoletos = this.cinepolisForm.value.cantidadBoletos;

    // Asegurarse de que la cantidad de boletos no supere el máximo permitido
    if (cantidadBoletos > this.maxBoletos) {
      cantidadBoletos = this.maxBoletos; // Ajustar a máximo permitido
    }

    // Cálculo del valor sin descuentos
    let valorTotal = cantidadBoletos * this.precioBoleto;

    // Aplicar descuentos según la cantidad de boletos
    if (cantidadBoletos > 5) {
      valorTotal *= 0.85; // 15% de descuento
    } else if (cantidadBoletos >= 3 && cantidadBoletos <= 5) {
      valorTotal *= 0.90; // 10% de descuento
    }
    // Aplicar descuento adicional si tiene tarjeta Cineco
    if (this.cinepolisForm.value.cineco) {
      valorTotal *= 0.90; // 10% de descuento adicional
    }
    this.valorPagar = Number(valorTotal.toFixed(2)); // Solo 2 decimales
  }

  salir(): void {
    this.cinepolisForm.reset();
    this.valorPagar = 0;
  }
}
