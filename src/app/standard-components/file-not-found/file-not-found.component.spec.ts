import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { FileNotFoundComponent } from './file-not-found.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('FileNotFoundComponent', () => {
    let component: FileNotFoundComponent;
    let fixture: ComponentFixture<FileNotFoundComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FileNotFoundComponent],
            imports: [BrowserDynamicTestingModule, RouterTestingModule, PipesModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FileNotFoundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
