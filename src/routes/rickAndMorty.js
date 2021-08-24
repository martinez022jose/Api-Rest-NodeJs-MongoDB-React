const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch');

router.get('/', async (req, res)=>{
    const data = await fetch('https://rickandmortyapi.com/api/character');
    const characters = await data.json();
    res.json(characters.results);
});

module.exports = router;