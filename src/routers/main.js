const express = require("express");
const router = express.Router();

const pageControllers = require("../controllers/pageControllers.js");
const searchControllers = require("../controllers/searchControllers.js");

router.get("/", pageControllers.home)
router.get("/dogs", pageControllers.dogs)
router.get("/cats", pageControllers.cats)
router.get("/fishes", pageControllers.fishes)

router.get("/search", searchControllers.search)

module.exports = router;