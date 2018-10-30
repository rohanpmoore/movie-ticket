# _Movie Tickets_

#### _Program to allow user to purchase movie tickets, 10.30.2018_

#### By **_Rohan Moore and Leo Mangutov_**

## Description

_This program allows the user to purchase movie tickets online and adjusts the ticket prices in accordance with existing parameters._

## Setup/Installation Instructions

1. _Clone this project from its [Github repository](https://github.com/rohanpmoore/movie-ticket).  The master branch contains a basic working version complete with actual questions, while the demonstration branch demonstrates the full features of the site with placeholder text._
2. _Run index.html, which will bring you to the portfolio home page._

## Known Bugs

* _No known bugs._

## Specifications

* Program takes the user's name and stores it.
    * Example Input: Rohan
    * Example Output: Program stores "Rohan" to the ticket

* Program takes the movie and showing time and outputs them to the user.
    * Example Input: Halloween, 11:15
    * Example Output: "Your ticket for Halloween at 11:15"

* Program reduces ticket price by two dollars if the movie is over two weeks old.
    * Example Input: Movie age 16
    * Example Output: Price $12 (normal 14)

* Program subtracts two dollars from the ticket price for morning showings.
    * Example Input: 10:00 AM showing
    * Example Output: Price $12 (normal 14)

* Program adds two dollars to the ticket price for late afternoon showings.
    * Example Input: 5:00 PM showing
    * Example Output: Price $16 (normal 14)

* Program takes user age and subtracts two dollars if they are 65 or over.
    * Example Input: 75 years old
    * Example Output: Price $12 (normal 14)

* Program subtracts one dollar from the ticket price for those under 18.
    * Example Input: 16 years old
    * Example Output: Price $13 (normal 14)

* Program takes into account any combination of previous price modifications.
    * Example Input: Movie is 16 days into its run, user is 16 years old, showing time is 6:00 PM
    * Example Output: Price $13 (normal 14)

## Support and Contact Details

_If you discover a bug or want to make a suggestion or comment, send me an email at rohanpmoore@gmail.com or file an issue on Github._

## Technologies Used

_This portfolio uses CSS, HTML, and Javascript._

### License

Copyright (c) 2018 **_Rohan Moore, Leo Mangutov_**

This software is licensed under the MIT license.
