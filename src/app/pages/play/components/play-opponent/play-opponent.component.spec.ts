import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { PlayOpponentComponent } from './play-opponent.component';

describe('PlayOpponentComponent', () => {
    let component: PlayOpponentComponent;
    let fixture: ComponentFixture<PlayOpponentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PlayOpponentComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayOpponentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
