require(['dojo/_base/declare'], function(declare){
  declare("Person", null, {
    constructor: function(name, age, currentResidence){
      this.name = name;
      this.age = age;
      this.currentResidence = currentResidence;
    },
    moveToNewState: function(newState){
      this.currentResidence = newState;
    }
  });
  var folk = new Person("phiggins", 28, "Tennessee");
  console.log(folk.currentResidence);
  folk.moveToNewState("Oregon");
  console.log(folk.currentResidence);
});