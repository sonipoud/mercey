const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({}).then(dbTag => {
    res.json(dbTag);
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    }
  }).then(dbTag => {
    res.json(dbTag);
  });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(
    {
      tag_name: req.body.tag_name
    }
  ).then(dbTag => {
    res.json(dbTag);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    where: {
      id: req.params.id
    }
  }).then(dbTag => {
    res.json(dbTag);
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbTag => {
    res.json(dbTag);
  });
});

module.exports = router;
