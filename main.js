#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let condition = true;
while (condition) {
    console.log(chalk.rgb(255, 140, 0).bold(`\n"Welcome To Annum's Words Counter"\n`));
    const answer = await inquirer.prompt([
        {
            name: "sentence",
            type: "input",
            message: "Enter Your Sentence to Count the Word: \n",
        },
    ]);
    const words = answer.sentence.trim().split(" ");
    //   console.log(words);
    console.log(chalk.rgb(255, 51, 153)(`\nTotal words of Your writting is =`), chalk.rgb(0, 255, 255)(`"${words.length}"\n`));
    const runProgram = await inquirer.prompt({
        name: "run",
        type: "confirm",
        message: "Do you want to continue: ",
        default: true,
    });
    condition = runProgram.run;
}
console.log(chalk.yellowBright(`\n"Thank You For Using My Words Counter"\n`));
