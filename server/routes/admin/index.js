module.exports = app => {

  const express = require('express')

  const router = express.Router()

  const Category = require('../../module/category')

  router.post('/categories', async (req, res) => {
    const data = await Category.create(req.body)
    res.send(data)
  })

  app.use('/admin/api', router)
}