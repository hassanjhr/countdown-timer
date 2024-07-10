#! /usr/bin/env node

// Countdown Timer Project:
// In this project, you will build a countdown timer using the date module.

// date module install command:
// npm install date-fns


// step1:
import { differenceInSeconds, DifferenceInSecondsOptions } from "date-fns";

// function for count down second:
function* coundownTimer(second: number){
    // while loop:
    while (second > 0) {
        yield second;
        second--;

    }
}


// step2: counter initialization:

let timerIterator = coundownTimer(30);

// function to create a countdown timer:
function displayCountdown() {
    // value below 10
    let result = timerIterator.next();

    // if else condition apply:

    if (!result.done) {
        // current date and time calls:
        const now = new Date();
        // calculate minutes in time:
        const coundownTimer = new Date(now.getTime() + (result.value * 1000));

        // calculate remaining seconds in time:
        const remainingSeconds = differenceInSeconds(coundownTimer, now);
        console.log(`Remaining Seconds: ${remainingSeconds}`);


        setTimeout(displayCountdown, 1000)  // 1 second is equal to 1000 ms


    }else {
        // display result countdown complete:
        console.log("Countdown Complete!");
    }

}

// invoke:
displayCountdown();
