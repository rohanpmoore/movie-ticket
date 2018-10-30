function Ticket(ownerName, ownerAge, movieInput, timeInput) {
  this.name = ownerName,
  this.age = ownerAge,
  this.movie = movieInput,
  this.time = timeInput,
  this.price = 14;
  this.calculatePrice();
}

Ticket.prototype.calculatePrice = function() {
  if(this.age > 64) {
    this.price -= 2;
  } else if (this.age < 18) {
    this.price -= 1;
  }
  var modifiedTime = parseInt((this.time).slice(0,2));
  if(modifiedTime < 12) {
    this.price -= 2;
  } else if(modifiedTime >= 17) {
    this.price += 2;
  }
}

Ticket.prototype.write = function() {
  var output = "";
  output += "Hello " + this.name + "!  ";
  output += "Your ticket for " + this.movie + " at " + this.time;
  output += " will be $" + this.price + ".  ";
  output += "We hope you enjoy your showing!";
  return output;
}

$(document).ready(function() {
  $("#tickets").submit(function(event) {
    event.preventDefault();
    var inputName = $("#nameInput").val();
    var inputAge = parseInt($("#ageInput").val());
    var inputMovie = $("#movies").val();
    var inputTime = $("#times").val();
    if (!inputAge || inputAge < 0) {
      $("#invalidAge").show();
      return;
    }
    $("#invalidAge").hide();

    var yourTicket = new Ticket(inputName, inputAge, inputMovie, inputTime);
    $("#output").text(yourTicket.write());
  });
});
