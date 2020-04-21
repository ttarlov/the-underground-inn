# The Underground Inn- Where your SteamPunk 90s style video game hotel dream come true.....

This project was the final solo project for Module 2 at Turing School of Software And Design. The goal of the project was to use everything we have learned over the last two modules including fetch API, jQuery, responsive design, SCSS, Chia/Mocha for testing and implementation of NPM packages.  


I am a child of the 80s and video game player of the 90s. I knew right away I wanted the app to have a 90s video game feel, like a hotel from a Blade Runner or UI from DOOM II. The app might not have the best accessibility (90%+) but I had to sacrifice that for the "timeless" 90s video game design.  


## Installing / Getting started

Clone down the repo. Use terminal commands to navigate to the root folder of the repo locally.

1. npm install
2. cd into src folder
3. open index.html

## Steps to use the App

### There are two paths you can take: 
 
 **Manager** 
  
 1. You can log in as a manager. Use username **manager** and password **overlook2019**.
 
 2. As a manager first screen you will see is your dashboard which tells you stats for todays bookings including percent 
 of rooms booked, availability for today and also revenue for today in USD. 
 
 3. You are able to search customers and see their bookings. You are also able to delete bookings for a chosen customer and 
 also place new bookings for a chosen customer. 
 
 4. At anytime you are able to go back to the dashboard by clicking **Dash** button. 

  **Customer**

  1. You can log in as a customer. Use  **customerXX** for username where XX is a number between 1-50 for a user id and **overlook2019** for password. 
  
  2. When you login you will be presented with a welcome screen that will show you your current spend on all your bookings. 
  3. You are able to see your past, current and future bookings. 
  4. You can also book a room for a specific data and only rooms that are available for that day. 
  5. You can filter rooms based on their type (suite, junior suite, etc)
 

**Manager**
![](screen-shots/log-in-screen.png)
![](screen-shots/manager-dash-board.png)
![](screen-shots/manager-interaction.gif)

**Customer**
![](screen-shots/customer-welcome-screen.png)
![](screen-shots/book-a-room-screen.png)
![](screen-shots/room-selector-customer.png)
![](screen_shots/customer-interaction.gif)


### Live site link
[Github Pages](https://ttarlov.github.io/)



### Technologies Used

* HTML
* SCSS
* Mocha/Chai (testing)
* Jquery
* Moment.js
* WebPack
* Fetch API


## Learning Goals

## Solidify and demonstrate understanding of the following:
* Testing Class Properties and Methods with Mocha/Chai
* Test DOM manipulation with Chai Spies as needed
* Implement TDD 
* Data Restructuring
* Use Jquery for all DOM manipulation
* Use SCSS mixins, nesting and variable and also use partial files



## Challenges

So far this was the biggest project of my time at Turing. I only had 6 days to do this project from start to finish. The hardest part was using OOP properly and restructuring data. Using Spies for testing was also an uphill battle. 

## Wins

This biggest win for this project was doing 90%+ of all DOM manipulation from class methods and being able to spy
test them all. I also got a much deeper understanding of the TDD process. 
