const createMenuObject = require("../helpers/createMenuObject.js")
const Pet = require("../models/Pet.js")

exports.home = (req, res) => {
    // res.send("home no controller");
    const list = Pet.getAll();
    res.render("pages/page", {
        menu: createMenuObject.createMenu("all"),
        banner: {
            title: "Todos os animais",
            background: "allanimals.jpg",
        },
        list
    });
}

exports.dogs = (req, res) => {
    const list = Pet.getFromType("dog")
    res.render("pages/page", {
        menu: createMenuObject.createMenu("dog"),
        banner: {
            title: "Todos os cachorros",
            background: "banner_dog.jpg",
        },
        list
    });
}

exports.cats = (req, res) => {
    const list = Pet.getFromType("cat")
    res.render("pages/page", {
        menu: createMenuObject.createMenu("cat"),
        banner: {
            title: "Todos os gatos",
            background: "banner_cat.jpg",
        },
        list
    });
}

exports.fishes = (req, res) => {
    const list = Pet.getFromType("fish")
    res.render("pages/page", {
        menu: createMenuObject.createMenu("fish"),
        banner: {
            title: "Todos os peixes",
            background: "banner_fish.jpg",
        },
        list
    });
}