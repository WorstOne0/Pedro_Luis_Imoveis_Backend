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
    postedBy: { type: String },
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
    //
    favorite: {
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
    room: {
      type: Number,
      required: true,
    },
    suite: {
      type: Number,
      required: true,
    },
    garage: {
      type: Number,
      required: true,
    },
    additionalInfo: {
      type: Object,
    },
    //
    addressId: {
      type: String,
    },
    //
    thumbnail: {
      type: String,
    },
    imagens: {
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
