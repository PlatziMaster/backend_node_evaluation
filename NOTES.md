# Platzi master backend challenge

## Introduction

Hi my name is David, this is my first project using nodejs and express with mongoose.
I'm 28 years old, so I only have one company experience, this because I started a startup 3 years ago. Unfortanaly this startup close a year ago, but I learned a lot of programming techniques.

## Challenge resolution

I ran the docker-compose file to up a mongodb database instance, I used this only for development purposes.
I didn't have enough time to make a CI/CD implementation using github actions, so I decided [published it in heroku](https://platzi-master-dc.herokuapp.com/), for a quick implementetion. Here is a [documentation using postman](https://documenter.getpostman.com/view/907650/TzY68tzT).

I used a MVC pattern, with an extra service layer, this because I tried to made a repository pattern at first, but I realized I didn't have enough time. Also I made some endpoints validations, for don't let pass requests that not have a compatible structure.

I made a one little change in get list documents. I decided to implement pagination method, but only if query params passed. So for this change I had to change the test files to run with a expected response.

I needed to change test files, beacuse it had close the connection with the documentdb.

I tried my best with this new language (for me), and always trying to respect structure for make this project bigger.

Thanks!!
