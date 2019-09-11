import * as feather from 'feather-icons/dist/feather';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/** Transforms a given string to an icon */
@Pipe({
    name: 'feather'
})
export class FeatherPipe implements PipeTransform {
    /** Constructor */
    constructor(private sanitizer: DomSanitizer) { }

    /** Transforms the given string to an icon
     * Possible icons: https://feathericons.com
    */
    transform(icon: string, size: number = 24, fill: string = 'none') {
        return this.sanitizer.bypassSecurityTrustHtml(feather.icons[icon].toSvg({
            width: size,
            height: size,
            fill: fill,
            verticalAlign: 'bottom'
        }));
    }
}
