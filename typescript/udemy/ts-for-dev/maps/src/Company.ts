import { faker } from "@faker-js/faker";

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lon: number;
  };

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lon: faker.location.longitude(),
    };
  }
}
