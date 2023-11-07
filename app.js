#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import Welcome from "./clidesign/design.js";
Welcome();
class Character {
    constructor(name) {
        this.fuel = 100;
        this.drinkPortions = 2;
        this.name = name;
    }
    fuelDecrease() {
        this.fuel -= 25;
    }
    fuelIncrease() {
        this.fuel += 25;
    }
}
const player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please Enter Your Name",
});
const opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select your Opponent",
    choices: ["Skeleton", "Assassin", "Zombie"],
});
const p1 = new Character(player.name);
const o1 = new Character(opponent.select);
const battle = async () => {
    console.log(chalk.bold.green(`A thrilling battle against ${o1.name} begins...`));
    while (p1.fuel > 0 && o1.fuel > 0) {
        const actions = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your action",
            choices: ["Attack", "Drink potion", "Run for your life"],
        });
        if (actions.opt === "Attack") {
            const num = Math.floor(Math.random() * 3);
            if (num === 0) {
                console.log(chalk.red.bold("You missed the attack!"));
                p1.fuelDecrease();
            }
            else if (num === 1) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${o1.name} got hit!`));
            }
            else {
                p1.fuelIncrease();
                console.log(chalk.green.bold("Great Job!"));
            }
        }
        else if (actions.opt === "Drink potion") {
            if (p1.drinkPortions > 0) {
                p1.fuelIncrease();
                p1.drinkPortions--;
                console.log(chalk.bold.green(`You drank a potion and feel re-energized! (${p1.drinkPortions} left)`));
            }
            else {
                console.log(chalk.red.bold("You have no more drink portions left!"));
            }
        }
        else if (actions.opt === "Run for your life") {
            console.log(chalk.red.bold.italic("You chose to run away..."));
            break;
        }
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
    }
    if (p1.fuel <= 0) {
        console.log(chalk.red.bold.italic("You Dead, Better luck in After Life"));
    }
    else if (o1.fuel <= 0) {
        console.log(chalk.green.bold.italic(`You defeated ${o1.name}! You Win`));
    }
    else {
        console.log(chalk.red.bold("You managed to escape."));
    }
    process.exit();
};
if (opponent.select === "Skeleton") {
    console.log(chalk.bold.green("You are facing a Skeleton!"));
    battle();
}
else if (opponent.select === "Assassin") {
    console.log(chalk.bold.red("You are facing an Assassin! Beware of their stealthy attacks."));
    battle();
}
else if (opponent.select === "Zombie") {
    console.log(chalk.bold.green("You are facing a Zombie! Beware of their bite"));
    battle();
}
