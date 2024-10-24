// Fill this in
let restaurantData = [
    {
        "id": 1,
        "name": "MOS BURGER",
        "phone": "+81 75-255-3275",
        "address": "Japan, 〒600-8002, Shimogyo Ward, Kyoto, 29-2 Otabicho",
        "photo": "images/mosburger.jpg",
        "link": "https://www.mos.jp/inbound/en/"
    },
    {
        "id": 2,
        "name": "CoCo ICHIBANYA",
        "phone": "+81 3-5363-9883",
        "address": "Japan, 〒160-0022 Tokyo, Shinjuku City, Shinjuku, 2 Chome−9−20, Lions Mansion Shinjukugyoenmae, １Ｆ",
        "photo": "images/coco.jpg",
        "link": "https://www.ichibanya.co.jp/"
    },
    {
        "id": 3,
        "name": "Torikizoku",
        "phone": "+81 50-3623-4509",
        "address": "Japan, 〒542-0071, Dotonbori, Chuo Ward, Osaka, 1 Chome-6-15, Comrado Doton Building 3F",
        "photo": "images/torikizoku.jpg",
        "link": "https://torikizoku.co.jp/"
    },
    {
        "id": 4,
        "name": "Kuse ga Tsuyoi Menya Reiwa",
        "phone": "",
        "address": "Japan, 〒541-0059 Osaka, Chuo Ward, Bakuromachi, 4 Chome-7-1 Novakaneichi Honmachi Midou",
        "photo": "images/jojo.jpg",
        "link": "https://x.com/menya_reiwa"
    },
    {
        "id": 5,
        "name": "SHOGUN BURGER",
        "phone": "+81 3-5273-4829",
        "address": "Japan, 〒160-0021 Tokyo, Shinjuku City, Kabukicho, 1 Chome-15-12 Piatt Building 1F",
        "photo": "images/shogun.jpg",
        "link": "https://shogun-burger.com/"
    },
    {
        "id": 6,
        "name": "the Lazy HOUSE",
        "phone": "+81 080-6334-1510",
        "address": "Japan, 〒454-0825 Aichi, Yoshimoto-cho, Nakagawa-ku, Nagoya, 3-3-1",
        "photo": "images/lazyfuku.jpg",
        "link": "https://yuruteinei.com/"
    },
];

export default restaurantData;

let lastId = restaurantData.length;

const getNextId = () => {
    lastId += 1;
    return lastId;
}

// Get a list of restaurants
const getRestaurants = () => {
    return restaurantData;
};


// Get a restaurant by id
const getRestaurant = (id) => {
    return restaurantData.find(restaurant => restaurant.id === id);
};

// Create a new restaurant entry
const createRestaurant = (newRestaurant) => {
    const id = getNextId();
    const restaurant = { id, ...newRestaurant };
    restaurantData.push(restaurant);
    return restaurant;
};

// Delete a restaurant by id
const deleteRestaurant = (id) => {
    restaurantData = restaurantData.filter(restaurant => restaurant.id !== id);
};

export { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant };