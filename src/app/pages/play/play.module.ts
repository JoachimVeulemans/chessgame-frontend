import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlayAiComponent } from './components/play-ai/play-ai.component';
import { PlayComponent } from './components/play/play.component';
import { PlayDualComponent } from './components/play-dual/play-dual.component';
import { PlayOpponentComponent } from './components/play-opponent/play-opponent.component';
import { PlayRoutingModule } from './play-routing.module';
import { PlaySelfComponent } from './components/play-self/play-self.component';
import { StandardComponentsModule } from 'src/app/standard-components/standard-components.module';
import { TranslateModule } from '@ngx-translate/core';

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
        StandardComponentsModule,
        TranslateModule
    ],
    exports: [
        PlayComponent
    ]
})
export class PlayModule { }
