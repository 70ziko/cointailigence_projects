const request = require('supertest');
const app = require('../src/app');

describe('Weather Controller', () => {
    it('should get user location', async () => {
        const res = await request(app).get('/user/location');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('location');
    });

    it('should search for weather updates for a location', async () => {
        const res = await request(app).get('/search/London');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('location');
        expect(res.body.location.name).toEqual('London');
    });
});
