const createMenuObject = require("../helpers/createMenuObject.js")

exports.home = (req, res) => {
    // res.send("home no controller");
    res.render("pages/page", {
        menu: createMenuObject.createMenu("all"),
        banner: {
            title: "Todos os animais",
            background: "allanimals.jpg",
        }
    });
}

exports.dogs = (req, res) => {
    
    res.render("pages/page", {
        menu: createMenuObject.createMenu("dog"),
        banner: {
            title: "Todos os cachorros",
            background: "banner_dog.jpg",
        }
    });
}

exports.cats = (req, res) => {
    res.render("pages/page", {
        menu: createMenuObject.createMenu("cat"),
        banner: {
            title: "Todos os gatos",
            background: "banner_cat.jpg",
        }
    });
}

exports.fishes = (req, res) => {
    res.render("pages/page", {
        menu: createMenuObject.createMenu("fish"),
        banner: {
            title: "Todos os peixes",
            background: "banner_fish.jpg",
        }
    });
}