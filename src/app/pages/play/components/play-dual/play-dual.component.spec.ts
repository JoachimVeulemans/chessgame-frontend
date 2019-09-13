import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { PlayDualComponent } from './play-dual.component';

describe('PlayDualComponent', () => {
    let component: PlayDualComponent;
    let fixture: ComponentFixture<PlayDualComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PlayDualComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayDualComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
