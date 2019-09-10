import { CommonModule } from '@angular/common';
import { FeatherPipe } from './feather/feather.pipe';
import { NgModule } from '@angular/core';
import { PipesRoutingModule } from './pipes-routing.module';

@NgModule({
    declarations: [
        FeatherPipe
    ],
    imports: [
        CommonModule,
        PipesRoutingModule
    ],
    providers: [
        FeatherPipe
    ],
    exports: [
        FeatherPipe
    ]
})
export class PipesModule {
    static forRoot() { return { ngModule: PipesModule, providers: [], }; }
}
