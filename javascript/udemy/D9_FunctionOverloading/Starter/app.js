function greet(firstname, lastname, language) {
  language = language || "en";

  if (language === "en") {
    console.log("Hello " + firstname + " " + lastname);
  }

  if (language === "es") {
    console.log("Hola " + firstname + " " + lastname);
  }
}

// overload function
function greetEnglish(firstname, lastname) {
  greet(firstname, lastname, "en");
}

function greetSpanish(firstname, lastname) {
  greet(firstname, lastname, "es");
}

greetEnglish("21", "Savage");
greetSpanish("Lil", "Wayne");
