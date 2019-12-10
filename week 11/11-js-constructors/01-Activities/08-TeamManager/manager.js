const inquirer = require("inquirer");

function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
}

Player.prototype.goodGame = function () {
    if (Math.floor((Math.random() * 2))===1){
        this.offense++
    } else {
        this.defense++
    };

};

Player.prototype.badGame = function () {
    if (Math.floor((Math.random() * 2))===1){
        this.offense--
    } else {
        this.defense--
    };
};

Player.prototype.printInfo = function () {
    console.log("Name: " + this.name + "\nPosition: " + this.position +
        "\nOffense: " + this.offense + "\nDefense: " + this.defense);
    console.log("---------------");
};


const starters = [];
const subs = [];
const team = [];
 
const createPlayer = () => {
if (starters.length + subs.length < 5) {
inquirer.prompt([{
    message: "Player's Name",
    name: "name"
}, {
    message: "Player's Position",
    name: "position"
}, {
    message: "Player's Offense",
    name: "offense"
}, {
    message: "Player's Defense",
    name: "defense"
}]).then(function(answers) {
    const player = new Player(answers.name, answers.position, answers.offense, answers.defense);
    if (starters.length < 3) {
        starters.push(player);
        team.push(player);
        console.log(`${player.name} added to the starters`);
    } else {
        subs.push(player);
        team.push(player);
        console.log(`${player.name} added to the subs`);
    }
    createPlayer();
})
} else {
    console.log('the team is created');
    //the teams are created.  Start the game
}

createPlayer()}