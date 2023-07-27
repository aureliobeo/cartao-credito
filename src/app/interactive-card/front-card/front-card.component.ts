import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-front-card',
    template: `<div>
    <nz-card class="card-front">
      <div class="card-redit-front">
        <span class="number-front-card">{{ numeroCartaoFront }}</span>
        <div class="name-data-card-front">
          <span class="name-card-front">{{ nomeCartaoFront }}</span>
          <span>{{ dataMesFront }}/{{ dataAnoFront }}</span>
        </div>
      </div>
    </nz-card>
  </div>`,
    styleUrls: ['./front-card.component.css']
})
export class FrontCardComponent implements OnInit {

    public nomeCartaoFront?: string = 'Teste do Beo';
    public numeroCartaoFront?: string = '0000 0000 0000';
    public dataMesFront?: string = '00';
    public dataAnoFront?: string = '00';
    public cvcCartaoBack?: string = '000';

    constructor() { }

    ngOnInit(): void {

    }
}