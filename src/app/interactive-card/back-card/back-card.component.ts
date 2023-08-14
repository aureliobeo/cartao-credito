import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-back-card',
  template: `      <div>
    <nz-card class="card-back">
      <div class="card-redit-back">
        <div class="name-data-card-front">
          <span class="name-card-back">{{ cvcCartaoBack }}</span>
        </div>
      </div>
    </nz-card>
  </div>`,
  styleUrls: ['./back-card.compoent.css']
})
export class BackCardCompoent implements OnInit {

  public cvcCartaoBack?: string = '000';

  constructor() { }

  ngOnInit(): void {

  }
}