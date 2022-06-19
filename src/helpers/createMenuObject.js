exports.createMenu = (option="") => {
    if( option === "all" ||  option === "dog" || option === "cat" || option === "fish") {
        const returnObject = {
            all: false,
            dog: false,
            cat: false,
            fish: false
        };
        returnObject[option] = true;
        return returnObject;
    }
}

// exports retorna um objeto