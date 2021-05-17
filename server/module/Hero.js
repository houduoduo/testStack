const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  title: {
    type: String
  },
  categories: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Category'
  },
  scores: {
    difficult: {type: Number},
    skills: {type: Number},
    attack: {type: Number},
    survwe: {type: Number}
  },
  skills: [{
    icon: {type: String},
    name: {type: String},
    description: {type: String},
    tips: {type: String}
  }],
  items1: [{
    items: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Item'
    },
  }],
  items2: [{
    items: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Item'
    },
  }],
  asageTips: {type: String},
  battleTips: {type: String},
  teamTips: {type: String},
  partners: [{
    heroes:{
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Hero'
    },
    description: {type: String}
  }]
})

module.exports = mongoose.model('Hero', schema)