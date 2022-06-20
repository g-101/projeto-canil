const createMenuObject = require("../helpers/createMenuObject.js");
const Pet = require("../models/Pet.js");

exports.search = (req, res) => {
    const q = req.query.q;
    let list = null;
    if(!q) {
        res.redirect("/");
        return
    }
    else if(typeof q == "string") {
        list = Pet.getFromName(q)
    }
    
    
    res.render("pages/page", {
        menu: createMenuObject.createMenu(),
        list,
        q

    });
}