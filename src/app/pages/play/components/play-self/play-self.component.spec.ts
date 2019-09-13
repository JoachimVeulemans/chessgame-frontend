import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { PlaySelfComponent } from './play-self.component';

describe('PlaySelfComponent', () => {
    let component: PlaySelfComponent;
    let fixture: ComponentFixture<PlaySelfComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PlaySelfComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlaySelfComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
