import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'HitechWorld',
    templateUrl: './app/HitechWorld.html'
})
export class HitechWorldComponent {
    benefits: string;
    innerWidth: any;

    constructor(private cdr: ChangeDetectorRef) {
        let getWindow = () => {
            return window.innerWidth;
        };

        window.onresize = () => {
            this.innerWidth = getWindow();
            this.cdr.detectChanges(); //running change detection manually
        };
        this.innerWidth = window.innerWidth;
        this.benefits = "Compare Benefits";
    }

    getMenuItems(): string[] {
        var menuItems = [];
        menuItems.push("SINGLE ATTENDEE");
        menuItems.push("GROUP TICKETS");
        menuItems.push("INVESTORS");
        menuItems.push("STARTUPS");
        return menuItems;
    }

    getActiveMenuItem(): string {
        return 'SINGLE ATTENDEE';
    }

    getMainItems(): Array<MainItem> {
        var mainItem: Array<MainItem> = [];
        var body = [];

        body.push("Cold-pressed poke thundercats brooklyn chillwave chartreuse");
        body.push("Craft beer 3 wolf moon tbh hoodie");
        body.push("YOLO synth hammock");
        body.push("Distillery aesthetic VHS affogato gentrify bespoke");
        body.push("Chia readymade schitz brunch yuccie echo park");

        mainItem.push({ header: 'SUMMER SAVER', main: '1595', footer: 'Save 400 <br/> Until Aug. 31<br/>', active: false, body: body });
        mainItem.push({ header: 'EXPO ONLY', main: '299', footer: 'Until October<br/>', active: true, body: body });
        mainItem.push({ header: 'PUBLIC & GOVERNMENT SECTOR', main: '1295', footer: 'Save 1500<br/>Until October<br/>', active: false, body: body });
        mainItem.push({ header: 'STANDARD CONFERENCE & EXPO', main: '1695', footer: 'Do you have a promo code?<br/>&inputText&', active: false, body: body });

        return mainItem;
    }

    getFooter(footer: string): string {
        footer = footer.replace("&inputText&", "");
        return footer;
    }

    clickBenefits() {
        var bfts = this.benefits ? this.benefits : 'Compare Benefits';
        this.benefits = bfts != 'Close' ? 'Close' : 'Compare Benefits';
    }
}

interface MainItem {
    header: string;
    main: string;
    footer: string;
    body: string[];
    active: boolean;
}