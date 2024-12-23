import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: false,
  templateUrl: './data-binding.component.html',
  styles: []
})
export class DataBindingComponent  {

  public contadorClique: number = 0;

  public nome = "";

  adicionarClique() {
    this.contadorClique++;
  }

  zerarClique() {
    this.contadorClique = 0;
  }

  // KeyUp(event: any) {

  //   this.nome = event.target.value;
  // }
}