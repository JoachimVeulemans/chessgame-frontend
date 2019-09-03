import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileNotFoundComponent } from './standard-components/file-not-found/file-not-found.component';

const routes: Routes = [
    {
        path: '',
        // canActivate: [AuthGuardService],
        loadChildren: './pages/home/home.module#HomeModule'
    },
    {
        path: 'play',
        // canActivate: [AuthGuardService],
        loadChildren: './pages/play/play.module#PlayModule'
    },
    {
        path: 'profile',
        // canActivate: [AuthGuardService],
        loadChildren: './pages/profile/profile.module#ProfileModule'
    },
    {
        path: 'replay',
        // canActivate: [AuthGuardService],
        loadChildren: './pages/replay/replay.module#ReplayModule'
    },
    {
        path: '**',
        component: FileNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
