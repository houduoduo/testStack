module.exports = app => {

  const express = require('express')

  const router = express.Router({
    mergeParams: true
  })

  router.post('/', async (req, res) => {
    const data = await req.Model.create(req.body)
    res.send(data)
  })

  router.get('/', async (req, res) => {

    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }

    const items = await req.Model.find().setOptions(queryOptions).limit(10)
    res.send(items)
  })

  router.get('/:id', async (req, res) => {
    const data = await req.Model.findById(req.params.id)
    res.send(data)
  })
  
  router.put('/:id', async (req, res) => {
    const data = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(data)
  })

  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: "删除成功 "
    })
  })

  app.use('/admin/api/rest/:resoure', async (req, res, next) => {
    const className = require('inflection').classify(req.params.resoure)
    req.Model = require(`../../module/${className}`)
    
    next()
  }, router)

  const multer = require('multer')
  const upload = multer({dest: __dirname+ '/../../upload'})

  app.post('/admin/api/upload', upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = "http://localhost:3000/upload/" + file.filename
    res.send(file)
  })
}