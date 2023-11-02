require('dotenv').config();

const { default: mongoose } = require('mongoose');
const { databaseConnect } = require('./database')

databaseConnect().then(async () => {
    console.log("Creating seed data.");

    const Cat = mongoose.model('Cat', {
        name: String,
        colour: String,
        breed: String,
        favouritePlacesToSit: [String],
        gender: String,
        age: Number, // integer
        safeToPet: Boolean,
        weightKg: Number, // Float, decimal
        favouriteToys: [String],
        photos: [String] // URL to some file storage like AWS S3, Google Cloud, Azure etc.
    })

    let newLina = new Cat({
        name: "Lina",
        colour: "orange",
        breed: "Meowth",
        favouritePlacesToSit: ["Keyboard", "Zach's shoulder", "clean kitchen counters", "cardboard boxes"],
        gender: "female",
        age: 2,
        safeToPet: true,
        weightKg: 5.5,
        favouriteToys: ["Zach's keyboard", "coffee mugs", "string"],
        photos: ["http://google.com"]
    })

    await newLina.save().then(() => {
        console.log("Lina is in the DB!");
    });
})