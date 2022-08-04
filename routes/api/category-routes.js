const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// FIND ALL {Categories}------------------------------------------------------------------------------
router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
    include: [{model: Product}]
    });

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// FIND ONE {Category} by 'id' value------------------------------------------------------------------
router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findOne({
    where: {id: req.params.id},
    include: [{model: Product}]
    });

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// CREATE new {Category}------------------------------------------------------------------------------
router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});
// UPDATE {Category} by 'id' value--------------------------------------------------------------------
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    res.status(200).json(await Category.update(req.body, {
    where: {id: req.params.id}
    }));

  } catch (err) {
    console.log(err);
    res.status(500);
  }
});
// DELETE {Category} by 'id' value--------------------------------------------------------------------
router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
    where: {id: req.params.id}
    });

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// ---------------------------------------------------------------------------------------------------
module.exports = router;
