import { animate, query, style, transition, trigger } from '@angular/animations';

/** Animation that fades from page to page with a leave of 0.25s and an enter of 0.25s */
export const FadeAnimation =
    trigger('FadeAnimation', [
        transition('* => *', [
            query(':enter', [style({ opacity: 0 })], { optional: true }),
            query(':leave', [style({ opacity: 1 }), animate('0.25s', style({ opacity: 0 }))], { optional: true }),
            query(':enter', [style({ opacity: 0 }), animate('0.25s', style({ opacity: 1 }))], { optional: true })
        ])
    ]);
