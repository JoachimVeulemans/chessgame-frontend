import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

/** Defines the selector and location of the HTML & SCSS */
@Component({
    selector: 'app-chessboard',
    templateUrl: './chessboard.component.html',
    styleUrls: ['./chessboard.component.scss']
})
export class ChessboardComponent implements OnInit {
    /** Variable that holds the size of the chessboard (small, medium & large) */
    @Input() size: string;

    /** Constructor */
    constructor(private apiService: ApiService) { }

    /** Defines what should be done next when the component is created */
    ngOnInit() {
        this.setSize();
        // Uncomment this line below when createElement is fixed - wip for Joachim
        // this.getChessboard();
    }

    /** Sets the correct size of the chessboard based on the string (small, medium or large) provided */
    private setSize() {
        const chessboard = document.getElementById('chessboard');

        switch (this.size) {
            case 'small':
                chessboard.style.width = '20%';
                break;
            case 'medium':
                chessboard.style.width = '40%';
                break;
            case 'large':
                chessboard.style.width = '70%';
                break;
            default:
                console.log('Error!');
        }

        chessboard.style.height = chessboard.style.width;
    }

    /** Performs an API call to backend to get all chesspieces and makes tr's and app-chesspiece's */
    private getChessboard() {
        const chessboard = document.getElementById('chessboard');

        this.apiService.getChessboard().subscribe((value) => {
            for (let i = 0; i < value.length; i++) {
                const row_element = document.createElement('tr');

                chessboard.appendChild(row_element);

                for (let j = 0; j < value[i].length; j++) {
                    row_element.appendChild(document.createElement('app-chesspiece'));
                }
            }
        }, (error) => {
            console.log('Error' + error);
        });
    }
}
