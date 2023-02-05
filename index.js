const express = require("express")
const mongoose = require("mongoose")
const Restaurant = require("./model/Restaurant")
const restaurantRouter = require("./routes/RestaurantRoutes")
// const RestaurantData = require('./model/RestaurantData')

const app = express()
app.use(express.json())

mongoose
  .connect(
    "mongodb+srv://hidden:hidden@week04.thgujhs.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((success) => {
    console.log("Connected to MongoDB")
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error)
  })

const seedData = [
  {
    address: {
      building: "1008",
      street: "Morris Park Ave",
      zipcode: "10462",
    },
    city: "Bronx",
    cuisine: "Bakery",
    name: "Morris Park Bake Shop",
    restaurant_id: "30075445",
  },
  {
    address: {
      street: "Thai Son Street",
      zipcode: null,
    },
    city: "Manhattan",
    cuisine: "Vietnamese",
    name: "Pho Me Long Time",
    restaurant_id: "30075455",
  },
  {
    address: {
      building: "253",
      street: "East 167 Street",
      zipcode: null,
    },
    city: "Bronx",
    cuisine: "Chicken",
    name: "Mom's Fried Chicken",
    restaurant_id: "40382900",
  },
  {
    address: {
      building: "120",
      street: "East 56 Street",
      zipcode: "19800",
    },
    city: "Mahattan",
    cuisine: "Italian",
    name: "Montebello Restaurant",
    restaurant_id: "40397082",
  },
  {
    address: {
      building: "195",
      street: "Soprano Street",
      zipcode: "17500",
    },
    city: "Staten Island",
    cuisine: "Hamburgers",
    name: "Joeys Burgers",
    restaurant_id: "40397555",
  },
  {
    address: {
      building: "200",
      street: "Queens Boulevard",
      zipcode: "19700",
    },
    city: "Queens",
    cuisine: "American",
    name: "Brunos on the Boulevard",
    restaurant_id: "40397678",
  },
  {
    address: {
      building: "555",
      street: "Sushi Street",
      zipcode: "17700",
    },
    city: "Brooklyn",
    cuisine: "Japanese",
    name: "Iron Chef House",
    restaurant_id: "40397699",
  },
  {
    address: {
      building: "555",
      street: "Fontana Street",
      zipcode: null,
    },
    city: "Brooklyn",
    cuisine: "Japanese",
    name: "Wasabi Sushi",
    restaurant_id: "40398000",
  },
  {
    address: {
      building: "900",
      street: "Goodfellas Street",
      zipcode: "17788",
    },
    city: "Brooklyn",
    cuisine: "Delicatessen",
    name: "Sal's Deli",
    restaurant_id: "40898000",
  },
  {
    address: {
      building: "909",
      street: "44 Gangster Way",
      zipcode: "17988",
    },
    city: "Queens",
    cuisine: "Delicatessen",
    name: "Big Tony's Sandwich Buffet",
    restaurant_id: "40898554",
  },
  {
    address: {
      building: "1201",
      street: "121 Canolli Way",
      zipcode: "17989",
    },
    city: "Queens",
    cuisine: "Delicatessen",
    name: "The Godfather Panini Express",
    restaurant_id: "40898554",
  },
]

Restaurant.insertMany(seedData, function(error) {
    if (error) {
        console.log(error)
    } else {
        console.log("Data successfully seeded")
    }
})

app.use(restaurantRouter)

app.listen(8081, () => {
  console.log("Server started on port 8081")
})
