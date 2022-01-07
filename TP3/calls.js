const axios = require('axios');

const baseUrl = 'https://swapi.py4e.com/api/';

const starships = axios.get(`${baseUrl}starships/10`);
const totalPlanets = axios.get(`${baseUrl}planets`);
const birthDayVador = axios.get(`${baseUrl}people?search=vader`);
const characterWookiee = axios.get(`${baseUrl}people/13?format=wookiee`);
const r2Planet = axios.get(`${baseUrl}people?search=r2`);
const r2planetUrls = axios.get(`${baseUrl}planets/8`);

const startCalls = () => {
    return axios.all([
        starships,
        totalPlanets,
        birthDayVador,
        characterWookiee,
        r2Planet,
        r2planetUrls
    ]);
};

async function execute() {
    try {
        const results = await startCalls();
        console.log(results);

    } catch (error) {
        console.log(error);
    };
};

execute();