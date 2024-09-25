// Models
import RealEstate from "../models/real_estate.js";

export default {
  // ** CRUD Operations **
  get: async (req, res, next) => {
    try {
      // const realEstateList = await RealEstate.find({});
      const realEstateList = [
        {
          _id: "1",
          title: "Casa",
          description: "Casa em boa condição",
          type: "Casa",
          price: 1000000,
          area: 100,
          rooms: 4,
          bathrooms: 2,
          garages: 1,
          thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLwsfo9NC1pzBgR2nmp8LIBDIPbZSqODx4Sg&s",
          images: [],
        },
        {
          _id: "1",
          title: "Casa",
          description: "Casa em boa condição",
          type: "Aparamento",
          price: 2000000,
          area: 200,
          rooms: 3,
          bathrooms: 1,
          garages: 1,
          thumbnail: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
          images: [],
        },
      ];

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
