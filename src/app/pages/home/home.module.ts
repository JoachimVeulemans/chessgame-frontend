import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { StandardComponentsModule } from 'src/app/standard-components/standard-components';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        StandardComponentsModule
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule { }
