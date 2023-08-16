import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-interactive',
  template: `<div class="container">
    <div>
      <img src="../../assets/images/bg-main-desktop.png" />
      <app-front-card [valorRecebido]="valorForm"></app-front-card>
      <app-back-card [valorRecebido]="valorForm"></app-back-card>
    </div>
    <app-form-card (valorBackCard)="receberValor($event)"></app-form-card>
  </div>
  `,
  styleUrls: ['./interactive-card.component.css']
})

export class InteractiveCardComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

   valorForm?: string;

  receberValor(valor: string) {
    this.valorForm = valor;
  }

}