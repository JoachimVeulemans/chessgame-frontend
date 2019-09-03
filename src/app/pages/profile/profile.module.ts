import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { StandardComponentsModule } from 'src/app/standard-components/standard-components';

@NgModule({
    declarations: [
        ProfileComponent,
        SettingsComponent
    ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        StandardComponentsModule
    ],
    exports: [
        ProfileComponent
    ]
})
export class ProfileModule { }
