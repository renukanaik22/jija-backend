const Item = require('../models/Item');

exports.getItems = async (req, res) => {
    const items = await Item.find();
    res.json(items);
}

exports.saveItem = async (req, res) => {
    const item  = new Item(req.body);
    const saved = await item.save();
    res.status(201).json(saved);

}
