import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import restaurantData, { getRestaurants, getRestaurant } from "./data/restaurants.js";
import { backendRouter } from './routes/api.js';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/api', backendRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/attractions', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'attractions.html'));
});

app.get('/restaurants', (req, res) => {
    const restaurants = getRestaurants();
    res.render('restaurants', {restaurants});
});

app.get('/restaurants/:id', (req, res) => {
    const id = parseInt(req.params.id, 10); 
    const restaurant = getRestaurant(id);

    if (restaurant) {
        res.render('restaurant-details', { restaurant }); 
    } else {
        res.status(404).send('Restaurant not found');
    }
});


app.get('/newrestaurants', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'newrest.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
