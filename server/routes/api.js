import express from 'express';
import restaurantData, { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant } from "../data/restaurants.js";
const router = express.Router();

router.get('/restaurants', (req, res) => {
    const restaurants = getRestaurants();
    res.json(restaurants);
});

router.get('/restaurants/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const restaurant = getRestaurant(id);

    if (restaurant) {
        res.json(restaurant);
    } else {
        res.status(404).json({ error: 'Restaurant not found'});
    }
});

router.post('/restaurants', (req, res) => {
    const newRestaurant = req.body;
    newRestaurant.id = restaurantData.length ? restaurantData[restaurantData.length - 1].id + 1 : 0;;
    restaurantData.push(newRestaurant);
    res.status(201).send(newRestaurant);
});

router.delete('/restaurants/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const restaurantIndex = restaurantData.findIndex(r => r.id === id);

    if (restaurantIndex !== -1) {
        restaurantData.splice(restaurantIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Restaurant not found');
    }
});


export {router as backendRouter};