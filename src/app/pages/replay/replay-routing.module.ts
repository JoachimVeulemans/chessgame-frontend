import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReplayComponent } from './components/replay/replay.component';

const routes: Routes = [
    {
        path: '',
        component: ReplayComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReplayRoutingModule { }
