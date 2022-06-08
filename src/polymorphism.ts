import "reflect-metadata";
type channelType = "cartoon" | "country" | "sport";

// [✅]
class Channel {
    public advertisingSponsors: string[];

    constructor() {
        this.advertisingSponsors = [];
    }

    public addAdvertising(advertisingSponsors: string): void {}
    public getAdvertisingList(): void {}
}

class CartoonChannel extends Channel {
    constructor() {
        super();
    }

    public addAdvertising(advertisingSponsors: string): void {
        this.advertisingSponsors.push(advertisingSponsors);
    }

    public getAdvertisingList() {
        console.log(`Advertising of cartoon channel is ${this.advertisingSponsors.join(', ')}`)
    }
}

class CountryChannel extends Channel {
    constructor() {
        super()
    }

    public addAdvertising(advertisingSponsors: string): void {
        this.advertisingSponsors.push(advertisingSponsors);
    }

    public getAdvertisingList() {
        console.log(`Advertising of country channel is ${this.advertisingSponsors.join(', ')}`)
    }
}

class SportChannel extends Channel {
    constructor() {
        super()
    }

    public addAdvertising(advertisingSponsors: string): void {
        this.advertisingSponsors.push(advertisingSponsors);
    }

    public getAdvertisingList(): void {
        console.log(`Advertising of sport channel is ${this.advertisingSponsors.join(', ')}`)
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

// [❌, 💩 * 2^3]
class channel {
    private type: channelType;
    private advertisingSponsors: string[]

    constructor(type: channelType) {
        this.type = type;
        this.advertisingSponsors = [];
    }

    public addAdvertising(advertisingSponsors: string) { //Пиздец просто, вам нравится?
        if(this.type === "cartoon") {
            this.advertisingSponsors.push(advertisingSponsors);
        }
        if(this.type === "country") {
            this.advertisingSponsors.push(advertisingSponsors);
        }
        if(this.type === "sport") {
            this.advertisingSponsors.push(advertisingSponsors);
        }
    }

    public getAdvertisingList(): void {
        if(this.type === "cartoon") {
            console.log(`Advertising of that channel is ${this.advertisingSponsors.join(', ')}`)
        }
        if(this.type === "country") {
            console.log(`Advertising of that channel is ${this.advertisingSponsors.join(', ')}`)
        }
        if(this.type === "sport") {
            console.log(`Advertising of that channel is ${this.advertisingSponsors.join(', ')}`)
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