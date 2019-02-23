import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropDown]'
})
export class DropDownDirective {

    @HostBinding('class.open') isOpened = false;

    @HostListener('mouseenter') mouseEnter(event: Event) {
        this.isOpened = true;
    }

    @HostListener('mouseleave') mouseLeave(event: Event) {
        this.isOpened = false;
    }
}
