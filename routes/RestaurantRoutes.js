const express = require("express")
const Restaurant = require("../model/Restaurant")
const app = express()

app.get("/restaurants", async (req, res) => {
  Restaurant.find({}, (err, restaurants) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(restaurants)
    }
  })
})

// api endpoint to get restaurant by cuisine
app.get("/restaurants/cuisine/:cuisine", (req, res) => {
  const cuisine = req.params.cuisine
  Restaurant.find({ cuisine: cuisine }, (err, restaurants) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(restaurants)
    }
  })
})

// api endpoint that sorts by ascending name
app.get("/restaurants", (req, res) => {
  const sortBy = req.query.sortBy
  Restaurant.find({}, (err, restaurants) => {
    if (err) {
      res.status(500).send(err)
    } else {
      if (sortBy === "ASC") {
        res.send(restaurants.sort((a, b) => a.name.localeCompare(b.name)))
      } else if (sortBy === "DESC") {
        res.send(restaurants.sort((a, b) => b.name.localeCompare(a.name)))
      } else {
        res.send(restaurants)
      }
    }
  })
})

app.get("/restaurants/cuisine/Delicatessen", (req, res) => {
  const cuisine = req.params.cuisine
  Restaurant.find(
    { cuisines: cuisine, city: { $ne: "Brooklyn" } },
    { id: 0, cuisines: 1, name: 1, city: 1 },
    { sort: { name: 1 } },
    (err, restaurants) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(restaurants)
      }
    }
  )
})

module.exports = app
