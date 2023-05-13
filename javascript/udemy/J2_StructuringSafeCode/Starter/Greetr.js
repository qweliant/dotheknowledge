// create an execution context for library SAFELY using IIFE
(function (window, $) {
  var Greetr = function (first, last, lang) {
    return new Greetr.init(first, last, lang);
  };

  var supportedLangs = ["en", "ar"],
    greetings = {
      en: "Hello lil nigga",
      ar: "Salem lil niguh",
    },
    formalGreetings = {
      en: "Hello nigga",
      ar: "hello niguh",
    };

  var logMessages = {
    en: "Logged in",
    ar: "Inició sesión",
  };
  Greetr.prototype = {
    validate: function () {
      if (supportedLangs.indexOf(this.lang) === -1) {
        throw "Invalid lang";
      }
    },

    greeting: function () {
      return greetings[this.lang] + " " + this.firstName + "!";
    },

    formalGreeting: function () {
      return formalGreetings[this.lang] + ", " + this.fullName();
    },

    greet: function (formal) {
      var msg;

      // if undefined or null it will be coerced to 'false'
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }

      // 'this' refers to the calling object at execution time
      // makes the method chainable
      return this;
    },

    log: function () {
      if (console) {
        console.log(logMessages[this.lang] + ": " + this.fullName());
      }

      return this;
    },

    setLang: function (lang) {
      this.lang = lang;

      this.validate();

      return this;
    },
    HTMLGreeting: function (selector, formal) {
      if (!$) {
        throw "jQuery not loaded";
      }

      if (!selector) {
        throw "Missing jQuery selector";
      }

      var msg;
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      $(selector).html(msg);

      return this;
    },
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
  };

  Greetr.init = function (firstName, lastName, lang) {
    var self = this;
    self.firstName = firstName || "";
    self.lastName = lastName || "";
    self.lang = lang || "en";

    self.validate();
  };

  Greetr.init.prototype = Greetr.prototype;
  window.Greetr = window.g$ = Greetr;

  return Greetr;
})(window, jQuery);
