import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayRoutingModule } from './play-routing.module';
import { PlayComponent } from './components/play/play.component';
import { PlayAiComponent } from './components/play-ai/play-ai.component';
import { PlayOpponentComponent } from './components/play-opponent/play-opponent.component';
import { PlayDualComponent } from './components/play-dual/play-dual.component';
import { PlaySelfComponent } from './components/play-self/play-self.component';
import { StandardComponentsModule } from 'src/app/standard-components/standard-components';

@NgModule({
    declarations: [
        PlayComponent,
        PlayAiComponent,
        PlayOpponentComponent,
        PlayDualComponent,
        PlaySelfComponent
    ],
    imports: [
        CommonModule,
        PlayRoutingModule,
        StandardComponentsModule
    ],
    exports: [
        PlayComponent
    ]
})
export class PlayModule { }
