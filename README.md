# Advent of Code - 2023

> ⚠️  Work In Progress

This repo contains the solution for Advent of Code 2023 edition problems solved using JavaScript

It contains tests that solve the given example in each daily challenge

## Structure

The main code is place inside `src` folder. The solving algorithm for each day on `algorithm.js` file which is contained in a
folder named as the number of the day. In example, for the first day you will find
the solution in `/day/1/algorithm.js`.

In this folder you will also find its companion test suit on the `algorithm.test.js` file


## Run

As long as the challenge is written in vanilla JavaScript you will be able to execute it using Node.Js
To run an specific day algorithm use
```sh
npm run start -- --day=1
```

## Tests
```sh
npm run test
```

## Dev mode
```sh
npm run watch -- --day=1
```
