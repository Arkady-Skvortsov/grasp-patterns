// [✅]
class dateTemp {
  constructor() {}

  public temperatureDate(): void {}
}

class Date extends dateTemp {
  constructor() {
      super()
  }

  public diff(): void {
    console.log("someMethod() for date");
  }
  public add(): void {}
  public temperatureDate(): void {}
}

class Temp extends dateTemp {
  constructor() {
      super()
  }

  public diff(): void {
    console.log("Temp diff");
  }
  public add(): void {}
  public temperatureDate(): void {}
}

const date = new Date();
const temp = new Temp();

temp.diff();
date.diff();

// [❌]
class DateTemp {
    constructor() {}

    public dateDiff() {}
    public dateAdd() {}
    public tempDiff() {}
    public tempAdd() {}
    public dateTemperatureByTime() {}
}

export { Temp, Date }