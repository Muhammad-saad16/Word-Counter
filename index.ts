#! /usr/bin/env node
// This line is called a Shebang, which tells the shell which interpreter to use to execute the script.

// import the 'inquirer' module, which is a command line interface for Node.js
import inquirer from "inquirer"

//Declare a constant 'answer' and assign it to the result of inquirer.prompt function
const answes:{
    Sentence:string
} = await inquirer.prompt([
    {
    name: "Sentence",
    type: "input",
    message: "Enter your Sentence to count the word"
    }
])

const words = answes.Sentence.trim().split(" ")

// print the error of words to the console
console.log(words);

//print the word count of the sentence to the console
console.log(`your sentence word count is ${words.length}`);


