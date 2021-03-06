import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PlayAiComponent } from './components/play-ai/play-ai.component';
import { PlayComponent } from './components/play/play.component';
import { PlayDualComponent } from './components/play-dual/play-dual.component';
import { PlayOpponentComponent } from './components/play-opponent/play-opponent.component';
import { PlaySelfComponent } from './components/play-self/play-self.component';

const routes: Routes = [
    {
        path: '',
        component: PlayComponent
    },
    {
        path: 'ai',
        component: PlayAiComponent
    },
    {
        path: 'dual',
        component: PlayDualComponent
    },
    {
        path: 'opponent',
        component: PlayOpponentComponent
    },
    {
        path: 'self',
        component: PlaySelfComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlayRoutingModule { }
