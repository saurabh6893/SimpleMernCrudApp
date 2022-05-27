const express = require('express')
const UserModel = require('./models/User')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

app.use(express.json())
app.use(cors())

mongoose.connect(
  'mongodb+srv://geneson:Delta2000X@Alpha.roo3nxf.mongodb.net/?retryWrites=true&w=majority'
)

app.get('/getUsers', (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err)
    } else {
      res.json(result)
    }
  })
})

app.post('/createUser', async (req, res) => {
  const user = req.body
  const newUser = new UserModel(user)
  await newUser.save()

  res.json(user)
})

app.listen(3001, () => {
  console.log('server runs awesomely')
})
