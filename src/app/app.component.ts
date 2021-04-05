import { Component } from '@angular/core';
import { PaisesService } from './services/paises.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //any[]: del mismo tipo del la respuesta al que me estoy conectando
  paises: any[];

  constructor(private paisesService: PaisesService) {
    this.paises = [];
  }

  async ngOnInit() {
    this.paises = await this.paisesService.getPaises();
    console.log(this.paises);
  }
}
