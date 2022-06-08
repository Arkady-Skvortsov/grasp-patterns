"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
// [✅]
class Channel {
    advertisingSponsors;
    constructor() {
        this.advertisingSponsors = [];
    }
    addAdvertising(advertisingSponsors) { }
    getAdvertisingList() { }
}
class CartoonChannel extends Channel {
    constructor() {
        super();
    }
    addAdvertising(advertisingSponsors) {
        this.advertisingSponsors.push(advertisingSponsors);
    }
    getAdvertisingList() {
        console.log(`Advertising of cartoon channel is ${this.advertisingSponsors.join(', ')}`);
    }
}
class CountryChannel extends Channel {
    constructor() {
        super();
    }
    addAdvertising(advertisingSponsors) {
        this.advertisingSponsors.push(advertisingSponsors);
    }
    getAdvertisingList() {
        console.log(`Advertising of country channel is ${this.advertisingSponsors.join(', ')}`);
    }
}
class SportChannel extends Channel {
    constructor() {
        super();
    }
    addAdvertising(advertisingSponsors) {
        this.advertisingSponsors.push(advertisingSponsors);
    }
    getAdvertisingList() {
        console.log(`Advertising of sport channel is ${this.advertisingSponsors.join(', ')}`);
    }
}
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
            console.log(`Advertising of that channel is ${this.advertisingSponsors.join(', ')}`);
        }
        if (this.type === "country") {
            console.log(`Advertising of that channel is ${this.advertisingSponsors.join(', ')}`);
        }
        if (this.type === "sport") {
            console.log(`Advertising of that channel is ${this.advertisingSponsors.join(', ')}`);
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