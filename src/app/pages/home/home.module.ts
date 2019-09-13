import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { StandardComponentsModule } from 'src/app/standard-components/standard-components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        HomeComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        StandardComponentsModule,
        TranslateModule
    ],
    exports: [
        HomeComponent,
        LoginComponent,
        TranslateModule
    ]
})
export class HomeModule { }
