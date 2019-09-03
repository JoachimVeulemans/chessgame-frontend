import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReplayComponent } from './components/replay/replay.component';
import { ReplayRoutingModule } from './replay-routing.module';
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
