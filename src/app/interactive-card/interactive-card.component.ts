import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { NzMessageService } from "ng-zorro-antd/message";

@Component({
  selector: 'app-interactive',
  template: `<div class="container">
    <div>
      <img src="../../assets/images/bg-main-desktop.png" />
      
      <!-- <div>
        <nz-card class="card-front">
          <div class="card-redit-front">
            <span class="number-front-card">{{ numeroCartaoFront }}</span>
            <div class="name-data-card-front">
              <span class="name-card-front">{{ nomeCartaoFront }}</span>
              <span>{{ dataMesFront }}/{{ dataAnoFront }}</span>
            </div>
          </div>
        </nz-card>
      </div> -->
      <app-front-card></app-front-card>
      <div>
        <nz-card class="card-back">
          <div class="card-redit-back">
            <div class="name-data-card-front">
              <span class="name-card-back">{{ cvcCartaoBack }}</span>
            </div>
          </div>
        </nz-card>
      </div>
    </div>
    <nz-form [formGroup]="formulario">
      <div class="container-card">
        <nz-form-item>
          <nz-form-label>CARDHOLDER NAME</nz-form-label>
          <nz-form-control>
            <input
              formControlName="nome"
              class="input-name-number-card"
              nz-input
              placeholder="e.g. Jane Appleseed"
              required="true"
            />
          </nz-form-control>
        </nz-form-item>
        <nz-form-item>
          <nz-form-label>CARD NUMBER</nz-form-label>
          <nz-form-control>
            <input
              required="true"
              class="input-name-number-card"
              nz-input
              placeholder="e.g. Jane Appleseed"
              type="text"
              formControlName="numeroCartao"
              (input)="formatarNumeroCartao()"
              placeholder="Número do Cartão"
              maxlength="14"
            />
          </nz-form-control>
        </nz-form-item>
        <div class="input-date-number">
          <nz-form-item>
            <nz-form-label>EXP. DATE (MM/YY)</nz-form-label>
            <nz-form-control>
              <input
                required="true"
                formControlName="dataMes"
                class="input-date"
                nz-input
                type="text"
                (input)="formaDataMesCartao()"
                placeholder="MM"
                maxlength="2"
              />
              <input
                formControlName="dataAno"
                (input)="formaDataAnoCartao()"
                class="input-date"
                nz-input
                placeholder="YY"
                required="true"
                maxlength="2"
              />
            </nz-form-control>
          </nz-form-item>
          <nz-form-item>
            <nz-form-label>CVC</nz-form-label>
            <nz-form-control>
              <input
                formControlName="cvc"
                nz-input
                placeholder="e.g. 123"
                maxlength="3"
                required="true"
                (input)="formaCVC()"
              />
            </nz-form-control>
          </nz-form-item>
        </div>
  
        <button
          class="style-buttom"
          nz-button
          nzType="primary"
          (click)="formCard()"
        >
          Capturar Valores
        </button>
      </div>
    </nz-form>
  </div>
  `,
  styleUrls: ['./interactive-card.component.css']
})

export class InteractiveCardComponent implements OnInit {
  formulario: FormGroup;
  public nomeCartaoFront?: string = 'Teste do Beo';
  public numeroCartaoFront?: string = '0000 0000 0000';
  public dataMesFront?: string = '00';
  public dataAnoFront?: string = '00';
  public cvcCartaoBack?: string = '000';


  constructor(private fb: FormBuilder, private messageService: NzMessageService) {
    this.formulario = this.fb.group({
      nome: [null, [Validators.required]],
      numeroCartao: [null, [Validators.required, Validators.pattern('[0-9 ]*')]],
      dataMes: [null, [Validators.required, Validators.pattern('[0-9 ]*')]],
      dataAno: [null, [Validators.required, Validators.pattern('[0-9 ]*')]],
      cvc: [null, [Validators.required, Validators.pattern('[0-9 ]*')]],
    })
  }

  ngOnInit(): void {
  }

  formCard() {
    if (this.formulario.valid) {
      const dataMes = parseInt(this.formulario.get('dataMes')?.value);
      if (dataMes <= 12) {
        this.nomeCartaoFront = this.formulario.get('nome')?.value;
        this.numeroCartaoFront = this.formulario.get('numeroCartao')?.value;
        this.dataMesFront = this.formulario.get('dataMes')?.value;
        this.dataAnoFront = this.formulario.get('dataAno')?.value;
        this.cvcCartaoBack = this.formulario.get('cvc')?.value;
      } else {
        this.messageService.error('Por favor, preencha com uma data valida!');
      }

    } else {
      this.messageService.error('Por favor, preencha todos os campos obrigatórios!');
    }
  }

  formatarNumeroCartao() {
    let numeroCartao = this.formulario?.get('numeroCartao')?.value;
    numeroCartao = numeroCartao.replace(/\D/g, '');
    const numeroFormatado = numeroCartao.replace(/(\d{4})(?=\d)/g, '$1 ');
    this.formulario.patchValue({ numeroCartao: numeroFormatado });
  }

  formaDataAnoCartao() {

    let anoCartao = this.formulario?.get('dataAno')?.value;
    anoCartao = anoCartao.replace(/\D/g, '');
    const numeroFormatado = anoCartao.replace(/(\d{4})(?=\d)/g, '$1 ');
    this.formulario.patchValue({ dataAno: numeroFormatado });
  }

  formaCVC() {

    let cartaocvc = this.formulario?.get('cvc')?.value;
    cartaocvc = cartaocvc.replace(/\D/g, '');
    const numeroFormatado = cartaocvc.replace(/(\d{4})(?=\d)/g, '$1 ');
    this.formulario.patchValue({ cvc: numeroFormatado });
  }

  formaDataMesCartao() {
    let mesCartao = this.formulario?.get('dataMes')?.value;
    mesCartao = mesCartao.replace(/\D/g, '');
    const numeroFormatado = mesCartao.replace(/(\d{4})(?=\d)/g, '$1 ');
    this.formulario.patchValue({ dataMes: numeroFormatado });
  }

  enviarFormulario() {
    if (this.formulario.valid) {
      console.log('Número do cartão:', this.formulario?.get('numeroCartao')?.value);
    }
  }


  validandoDataANo() {
    const dataMes = parseInt(this.formulario.get('dataMes')?.value);
    const dataAno = this.formulario.get('dataAno')?.value;

  }
}