/// <reference types="@types/google.maps" />

import { User } from "./User";
import { Company } from "./Company";

const user = new User();
const company = new Company();
console.log(
  "wassup",
  user.name,
  "why yo goofy ahh company",
  company.companyName,
  "be saying",
  company.catchPhrase
);

// that hit diff. i can do all my ts here and do what on client?
// render javscript map compoent as part of script. neat and simple
new google.maps.Map(document.getElementById("map") as HTMLElement, {
  zoom: 1,
  center: { lat: company.location.lat, lng: company.location.lon },
});
