import { CommonModule, NgIf } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from "@angular/platform-browser";
import { NzCardModule } from 'ng-zorro-antd/card';
import { AppRoutingModule } from "../app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NzFormModule } from "ng-zorro-antd/form";
import { HttpClientModule } from "@angular/common/http";
import { IconsProviderModule } from "../icons-provider.module";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { NzMessageService } from 'ng-zorro-antd/message';
import { FrontCardComponent } from "./front-card/front-card.component";
import { InteractiveCardComponent } from "./interactive-card.component";
import { NzButtonModule } from "ng-zorro-antd/button";
import { BackCardCompoent } from "./back-card/back-card.component";
import { FormCardComponent } from "./form-card/form-card.component";

@NgModule({
    declarations: [
        InteractiveCardComponent,
        FrontCardComponent,
        BackCardCompoent,
        FormCardComponent
    ],
    imports: [
        CommonModule,
        NzCardModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        NzFormModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        IconsProviderModule,
        NzLayoutModule,
        NzMenuModule,
        NzCardModule,
        NzFormModule,
        NzInputModule,
        NzInputNumberModule,
        ReactiveFormsModule,
        NzButtonModule
    ],
    providers: [
        NzMessageService
    ],

})

export class InteractiveModule { }