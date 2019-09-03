import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplayRoutingModule } from './replay-routing.module';
import { ReplayComponent } from './components/replay/replay.component';
import { StandardComponentsModule } from 'src/app/standard-components/standard-components';

@NgModule({
    declarations: [
        ReplayComponent
    ],
    imports: [
        CommonModule,
        ReplayRoutingModule,
        StandardComponentsModule
    ],
    exports: [
        ReplayComponent
    ]
})
export class ReplayModule { }
