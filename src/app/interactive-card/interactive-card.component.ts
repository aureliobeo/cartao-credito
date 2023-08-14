import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-interactive',
  template: `<div class="container">
    <div>
      <img src="../../assets/images/bg-main-desktop.png" />
      <app-front-card></app-front-card>
      <app-back-card></app-back-card>
    </div>
    <app-form-card></app-form-card>
  </div>
  `,
  styleUrls: ['./interactive-card.component.css']
})

export class InteractiveCardComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}