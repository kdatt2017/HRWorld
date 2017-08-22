"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HitechWorldComponent = (function () {
    function HitechWorldComponent(cdr) {
        var _this = this;
        this.cdr = cdr;
        var getWindow = function () {
            return window.innerWidth;
        };
        window.onresize = function () {
            _this.innerWidth = getWindow();
            _this.cdr.detectChanges(); //running change detection manually
        };
        this.innerWidth = window.innerWidth;
        this.benefits = "Compare Benefits";
    }
    HitechWorldComponent.prototype.getMenuItems = function () {
        var menuItems = [];
        menuItems.push("SINGLE ATTENDEE");
        menuItems.push("GROUP TICKETS");
        menuItems.push("INVESTORS");
        menuItems.push("STARTUPS");
        return menuItems;
    };
    HitechWorldComponent.prototype.getActiveMenuItem = function () {
        return 'SINGLE ATTENDEE';
    };
    HitechWorldComponent.prototype.getMainItems = function () {
        var mainItem = [];
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
    };
    HitechWorldComponent.prototype.getFooter = function (footer) {
        footer = footer.replace("&inputText&", "");
        return footer;
    };
    HitechWorldComponent.prototype.clickBenefits = function () {
        var bfts = this.benefits ? this.benefits : 'Compare Benefits';
        this.benefits = bfts != 'Close' ? 'Close' : 'Compare Benefits';
    };
    return HitechWorldComponent;
}());
HitechWorldComponent = __decorate([
    core_1.Component({
        selector: 'HitechWorld',
        templateUrl: './app/HitechWorld.html'
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
], HitechWorldComponent);
exports.HitechWorldComponent = HitechWorldComponent;
//# sourceMappingURL=hitechworld.component.js.map