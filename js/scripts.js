function Ticket(ownerName, ownerAge, movieInput, timeInput, movieTimeOut) {
  this.name = ownerName,
  this.age = ownerAge,
  this.movie = movieInput,
  this.time = timeInput,
  this.price = 14;
  this.calculatePrice(movieTimeOut);
}

Ticket.prototype.calculatePrice = function(timeOut) {
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
  if(timeOut > 14) {
    this.price -= 2;
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

function Movie(name, times, age) {
  this.name = name;
  this.times = times;
  this.age = age;
}

Movie.prototype.writeOption = function() {
  var output = "<option>" + this.name + "</option>"
  return output;
}

Movie.prototype.writeTimes = function() {
  var output = "";
  for(i = 0; i < (this.times).length; i++) {
    output += "<option>" + (this.times)[i] + "</option>";
  }
  return output;
}

function populateMovies(movies) {
  movies.forEach(function(movie) {
    $("#movies").append(movie.writeOption());
  });
}

function getMovieAge(movieName, movies) {
  // for(i = 0; i < movies.length; i++) {
  //   if(movies[i].name === movieName) {
  //     return movies[i].age;
  //   }
  // }
  return findMovie(movieName, movies).age;
}

function writeMovieTimes(movie) {
  $("#times").html(movie.writeTimes());
}

function findMovie(movieName, movies) {
  for(i = 0; i < movies.length; i++) {
    if(movies[i].name === movieName) {
      return movies[i];
    }
  }
}

$(document).ready(function() {
  var suspiria = new Movie("Suspiria", ["08:45", "11:30", "14:15", "16:20", "21:00"], 4)
  var beautifulBoy = new Movie("Beautiful Boy", ["09:15", "11:00", "13:45", "18:00", "22:00"], 18)
  var halloween = new Movie("Halloween", ["11:15", "14:00", "18:45", "21:15", "22:30"], 11)
  var movies = [suspiria, beautifulBoy, halloween];
  populateMovies(movies);
  $("#tickets").submit(function(event) {
    event.preventDefault();
    var inputName = $("#nameInput").val();
    var inputAge = parseInt($("#ageInput").val());
    var inputMovie = $("#movies").val();
    var inputTime = $("#times").val();
    if (!inputAge || inputAge < 0) {
      $("#output").text("");
      $("#invalidAge").show();
      return;
    }
    $("#invalidAge").hide();
    var movieAge = getMovieAge(inputMovie, movies);
    var yourTicket = new Ticket(inputName, inputAge, inputMovie, inputTime, movieAge);
    $("#output").text(yourTicket.write());
  });
  $("#movies").change(function() {
    var movie = $("#movies").val();
    if(!movie) {
      $("#times").html("");
    }
    writeMovieTimes(findMovie(movie, movies));
  });
});
