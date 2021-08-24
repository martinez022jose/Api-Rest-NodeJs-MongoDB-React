const { Router } = require('express');
const router = Router();
const _ = require('underscore');
const movies = require('../sample.json');
const Movie = require('../models/Movie.js');

router.get('/', async (req, res)=>{
    const movies = await Movie.find();
    res.send(movies);
});

router.get('/:id', async (req, res)=>{
    const {id} = req.params;
    const movie = await Movie.findById({_id:id});
    res.json(movie);
});

router.post('/', async (req, res)=>{
    const {title, year} = req.body;
    try{
        if(!title || !year){
            throw 'You must complete all the fields';
        }else{
            const newMovie = new Movie({title, year});
            await newMovie.save();
            res.json({status: 'Movie saved'});
        }
    }catch(e){
        res.send({"error": e});
    }
});

router.delete('/:id', async  (req, res)=>{
    try{
        const {id} = req.params;
        await Movie.findByIdAndDelete({_id:id});
        res.json({status: "Movie deleted"});
    }catch(e){
        res.send({"error": e});
    }
});

router.put('/:id', async (req, res)=>{
    try{
        const {id} = req.params;
        const {title, year} = req.body;
        if(!title || !year){
            throw 'You must complete all the fields';
        }else{
            await Movie.findByIdAndUpdate({_id : id}, {title, year});
            res.json({status: 'Movie updated'});
        }
        
    }catch(e){
        res.send({"error": e});
    }
});

module.exports = router;

