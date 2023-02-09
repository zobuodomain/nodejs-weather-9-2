const express = require("express");
const app = express();
const axios = require("axios");

app.get("/get-weather", async (req, res) => {
    const lat = req.query.lat;
    const lon = req.query.lon;

    // Fetch the weather data from the API
    const apiKey = "4d8fb5b93d4af21d66a2948710284366";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const weatherData = await axios.get(url);

    // Return the weather data to the client
    res.json(weatherData.data);
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
