

exports.home = (req, res) => {
    // res.send("home no controller");
    res.render("pages/page", {
        banner: {
            title: "Todos os animais",
            background: "allanimals.jpg",
        }
    });
}

exports.dogs = (req, res) => {
    
    res.render("pages/page", {
        banner: {
            title: "Todos os cachorros",
            background: "banner_dog.jpg",
        }
    });
}

exports.cats = (req, res) => {
    res.render("pages/page", {
        banner: {
            title: "Todos os gatos",
            background: "banner_cat.jpg",
        }
    });
}

exports.fishes = (req, res) => {
    res.render("pages/page", {
        banner: {
            title: "Todos os peixes",
            background: "banner_fish.jpg",
        }
    });
}