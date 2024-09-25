import { Schema, model } from "mongoose";
import { v4 } from "uuid";
import mongoosePaginate from "mongoose-paginate-v2";

// Maybe change lates into saparated schemas
const RealEstateSchema = new Schema(
  {
    _id: {
      type: String,
      default: v4,
    },
    //
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: true,
    },
    // Info
    price: {
      type: Number,
      required: true,
    },
    area: {
      type: Number,
      required: true,
    },
    rooms: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    garages: {
      type: Number,
      required: true,
    },
    //
    addressId: {
      type: String,
    },
    //
    thumbnail: {
      type: String,
    },
    images: {
      type: Array,
    },
    // Dates
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true, versionKey: false }
);

RealEstateSchema.plugin(mongoosePaginate);
export default model("real_estate", RealEstateSchema);
