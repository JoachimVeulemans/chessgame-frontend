import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { StandardComponentsModule } from 'src/app/standard-components/standard-components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        StandardComponentsModule,
        TranslateModule
    ],
    exports: [
        HomeComponent,
        TranslateModule
    ]
})
export class HomeModule { }
