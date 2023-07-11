import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { NzMessageService } from "ng-zorro-antd/message";

@Component({
    selector: 'app-interactive',
    templateUrl: './interactive-card.component.html',
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