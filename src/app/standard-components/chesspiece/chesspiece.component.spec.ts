import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ChesspieceComponent } from './chesspiece.component';

describe('ChesspieceComponent', () => {
    let component: ChesspieceComponent;
    let fixture: ComponentFixture<ChesspieceComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChesspieceComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChesspieceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
