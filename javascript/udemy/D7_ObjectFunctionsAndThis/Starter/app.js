// each obj gets its own execution context

// this execution context
function a() {
  console.log("This in a:", this);
  this.newvar = "sup lil bitch";
}

// this execution context
var b = function () {
  console.log("This in b:", this);
};

// and the global execution context
// so "this"
a();
b();

c = {
  name: "Spike",
  log: function () {
    var self = this; // use self to directly refernce right object
    self.name = "Rem";
    console.log("This in c:", self);

    var setname = function (newName) {
      self.name = newName; // would ref the global this if not used
    };

    setname("Ren");
    console.log(self);
  },
};

c.log();
