import { RouterModule, Routes } from '@angular/router';
import { FileNotFoundComponent } from './standard-components/file-not-found/file-not-found.component';
import { LoadingIconComponent } from './standard-components/loading-icon/loading-icon.component';
import { NgModule } from '@angular/core';

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
        path: 'loading',
        // canActivate: [AuthGuardService],
        component: LoadingIconComponent
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
