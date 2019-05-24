var express = require('express');
var router = express.Router();


const Movie = require('../models/Movie');

router.post('/', function (req, res, next) {

    const { title, year, category, country, imdb_score } = req.body;

    const movie = new Movie({
        title: title,
        year: year,
        category: category,
        imdb_score: imdb_score,
        country: country

    });
    //movie.save((err, data)=>{
    //    if (err) {

    //        res.json(err);
    //    }


    //    res.json(data);

    //});

    const promise = movie.save();
    promise.then((data) => { res.json(data); })
        .catch((err) => { res.json(err);});
 

});

module.exports = router;
