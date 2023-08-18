// ... other code ...

router.get('/search/:location', async (req, res) => {
    try {
        const location = req.params.location;
        const weatherData = await weatherService.getWeatherData(location);
        if (!weatherData) {
            throw new Error(`Weather data for ${location} not found`);
        }
        res.json(weatherData);
    } catch (error) {
        res.status(500).send({ error: error.toString() });
    }
});

// ... other code ...
