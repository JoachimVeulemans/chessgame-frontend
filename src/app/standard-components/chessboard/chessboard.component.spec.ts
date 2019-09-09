import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ChessboardComponent } from './chessboard.component';
import { ChesspieceComponent } from '../chesspiece/chesspiece.component';

describe('ChessboardComponent', () => {
    let component: ChessboardComponent;
    let fixture: ComponentFixture<ChessboardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ChessboardComponent, ChesspieceComponent
            ],
            providers: [
                HttpClient, HttpHandler
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChessboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
