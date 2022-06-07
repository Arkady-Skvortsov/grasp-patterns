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
require("reflect-metadata");
const inversify_1 = require("inversify");
// [✅]
let Channel = class Channel {
    advertisingSponsors;
    constructor() {
        this.advertisingSponsors = [];
    }
    addAdvertising(advertisingSponsors) { }
    getAdvertisingList() { }
};
Channel = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], Channel);
let CartoonChannel = class CartoonChannel extends Channel {
    constructor() {
        super();
    }
    addAdvertising(advertisingSponsors) {
        this.advertisingSponsors.push(advertisingSponsors);
    }
    getAdvertisingList() {
        console.log(`Advertising of cartoon channel is ${this.advertisingSponsors.join(', ')}`);
    }
};
CartoonChannel = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], CartoonChannel);
let CountryChannel = class CountryChannel extends Channel {
    constructor() {
        super();
    }
    addAdvertising(advertisingSponsors) {
        this.advertisingSponsors.push(advertisingSponsors);
    }
    getAdvertisingList() {
        console.log(`Advertising of country channel is ${this.advertisingSponsors.join(', ')}`);
    }
};
CountryChannel = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], CountryChannel);
let SportChannel = class SportChannel extends Channel {
    constructor() {
        super();
    }
    addAdvertising(advertisingSponsors) {
        this.advertisingSponsors.push(advertisingSponsors);
    }
    getAdvertisingList() {
        console.log(`Advertising of sport channel is ${this.advertisingSponsors.join(', ')}`);
    }
};
SportChannel = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], SportChannel);
const countryChannel = new CountryChannel();
const sportChannel = new SportChannel();
const cartoonChannel = new CartoonChannel();
countryChannel.addAdvertising("USA Marines");
countryChannel.addAdvertising("Powershell");
sportChannel.addAdvertising("Playstation");
cartoonChannel.addAdvertising("KFC");
countryChannel.getAdvertisingList();
sportChannel.getAdvertisingList();
cartoonChannel.getAdvertisingList();
// [❌]
class channel {
    type;
    advertisingSponsors;
    constructor(type) {
        this.type = type;
        this.advertisingSponsors = [];
    }
    addAdvertising(advertisingSponsors) {
        if (this.type === "cartoon") {
            this.advertisingSponsors.push(advertisingSponsors);
        }
        if (this.type === "country") {
            this.advertisingSponsors.push(advertisingSponsors);
        }
        if (this.type === "sport") {
            this.advertisingSponsors.push(advertisingSponsors);
        }
    }
    getAdvertisingList() {
        if (this.type === "cartoon") {
            console.log(`Advertising of that channel is ${this.advertisingSponsors.join(' ')}`);
        }
        if (this.type === "country") {
            console.log(`Advertising of that channel is ${this.advertisingSponsors.join(' ')}`);
        }
        if (this.type === "sport") {
            console.log(`Advertising of that channel is ${this.advertisingSponsors.join(' ')}`);
        }
    }
}
const cartoonCh = new channel("cartoon");
const countryCh = new channel("country");
const sportCh = new channel("sport");
cartoonCh.addAdvertising("KFC");
cartoonCh.addAdvertising("McDonalds");
countryCh.addAdvertising("USA Marines");
sportCh.addAdvertising("Playstation");
cartoonCh.getAdvertisingList();
countryCh.getAdvertisingList();
sportCh.getAdvertisingList();
//# sourceMappingURL=polymorphism.js.map