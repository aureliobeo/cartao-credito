import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-front-card',
  template: `<div>
    <nz-card class="card-front">
      <div class="card-redit-front">
        <span class="number-front-card">{{ valorRecebido == null ? numeroCartaoFront : valorRecebido.numeroCartao }}</span>
        <div class="name-data-card-front">
          <span class="name-card-front">{{ valorRecebido == null ? nomeCartaoFront : valorRecebido.nome }}</span>
          <span>{{ valorRecebido == null ? dataMesFront : valorRecebido.dataMes }}/{{ valorRecebido == null ? dataAnoFront : valorRecebido.dataAno }}</span>
        </div>
      </div>
    </nz-card>
  </div>`,
  styleUrls: ['./front-card.component.css']
})
export class FrontCardComponent implements OnInit {

  @Input() valorRecebido?: any;

  public nomeCartaoFront?: string = 'Teste do Beo';
  public numeroCartaoFront?: string = '0000 0000 0000';
  public dataMesFront?: string = '00';
  public dataAnoFront?: string = '00';
  public cvcCartaoBack?: string = '000';

  constructor() { }

  ngOnInit(): void {

  }
}