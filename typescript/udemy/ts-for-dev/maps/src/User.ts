import { faker } from "@faker-js/faker";

export class User {
  name: string;
  location: {
    lat: number;
    lon: number;
  };

  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: faker.location.latitude(),
      lon: faker.location.longitude(),
    };
  }
}
