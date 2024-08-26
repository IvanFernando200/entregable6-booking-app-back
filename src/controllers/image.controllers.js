const catchError = require("../utils/catchError");
const Image = require("../models/Image");
const Hotel = require("../models/Hotel");
const {
  uploadToCloudinary,
  deleteFromCloudinary,
} = require("../utils/cloudinary");

const getAll = catchError(async (req, res) => {
  const results = await Image.findAll({ include: [Hotel] });
  return res.json(results);
});

const create = catchError(async (req, res) => {
  if (!req.file) return res.status(400).json({ message: "Image not found" });
  const { url } = await uploadToCloudinary(req.file);
  const { hotelId } = req.body;
  const result = await Image.create({
    url,
    hotelId,
  });
  return res.json(result);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Image.findByPk(id);
  if (!result) return res.status(404).json({ message: "Image not found" });
  await deleteFromCloudinary(result.url);
  await result.destroy();
  return res.sendStatus(204);
});

module.exports = {
  getAll,
  create,
  remove,
};
