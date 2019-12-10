function Character(name, profession, gender, age, strength, hitPoints) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.strength = age;
    this.strength = strength;
    this.hitPoints = hitPoints;
    this.printStats = function () {
        console.log(Object.values(this))
    }

}

let dev = new Character("Tinashe", "engineer", "M", 33, 100, 98);
let doc = new Character("Elsen", "doctor", "F", 327, 100, 98);

doc.printStats()
dev.printStats()


class Coder {
    constructor(name, age, job, language) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.language = language;
    }

    printInfo() {
        console.log(`Name: ${this.name}\nAge: ${this.age}\nJob: ${this.job}\nLanguage: ${this.language}`)
    }
}