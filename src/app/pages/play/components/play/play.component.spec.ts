import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { PlayComponent } from './play.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PlayComponent', () => {
    let component: PlayComponent;
    let fixture: ComponentFixture<PlayComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PlayComponent],
            imports: [RouterTestingModule, PipesModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
