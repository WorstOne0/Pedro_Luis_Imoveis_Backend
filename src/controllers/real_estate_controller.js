// Models
import RealEstate from "../models/real_estate.js";

export default {
  // ** CRUD Operations **
  get: async (req, res, next) => {
    try {
      const realEstateList = await RealEstate.find({});

      return res.json({ status: 200, payload: realEstateList, message: "Ok!" });
    } catch (error) {
      return res.json({ status: 500, message: JSON.stringify(error) });
    }
  },
  getById: async (req, res, next) => {
    const { _id } = req.params;

    try {
      const realEstate = await RealEstate.find({ _id });

      return res.json({ status: 200, payload: realEstate, message: "Ok!" });
    } catch (error) {
      return res.json({ status: 500, message: JSON.stringify(error) });
    }
  },
  create: async (req, res, next) => {
    try {
      const realEstate = await RealEstate.create(req.body);

      return res.json({ status: 200, payload: realEstate, message: "Ok!" });
    } catch (error) {
      return res.json({ status: 500, message: JSON.stringify(error) });
    }
  },
  update: async (req, res, next) => {
    const { _id } = req.body;

    try {
      const realEstate = await RealEstate.findOneAndUpdate({ _id }, req.body, { new: true });

      return res.json({ status: 200, payload: realEstate, message: "Ok!" });
    } catch (error) {
      return res.json({ status: 500, message: JSON.stringify(error) });
    }
  },
};
