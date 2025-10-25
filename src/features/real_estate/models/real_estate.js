import { Schema, model } from "mongoose";
import { v4 } from "uuid";
import mongoosePaginate from "mongoose-paginate-v2";

const RealEstateSchema = new Schema(
  {
    _id: {
      type: String,
      default: v4,
    },
    //
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
    address: {
      cep: {
        type: String,
        required: true,
      },
      street: {
        type: String,
        required: true,
      },
      district: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      complement: {
        type: String,
        required: true,
      },
      number: {
        type: String,
        required: true,
      },
      //
      position: {
        type: Object,
        required: false,
      },
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
