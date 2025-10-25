import axios from "axios";

export default async (req, res, next) => {
  try {
    if (req.thumbnail) {
      const form = new FormData();
      form.append("file", req.thumbnail);

      const response = await axios.post(`${process.env.IMAGE_SERVER}/upload/single`, form, { headers: form.getHeaders() });

      req.body.thumbnail = response.data.payload.path;
      delete req.thumbnail;
    }

    if (req.images && req.images.length > 0) {
      const form = new FormData();
      form.append("files", req.images);

      const response = await axios.post(`${process.env.IMAGE_SERVER}/upload/many`, form, { headers: form.getHeaders() });

      const imageUrls = response.data.payload.map((image) => image.path);
      req.body.images = imageUrls;

      delete req.images;
    }

    return next();
  } catch (error) {
    return res.json({ status: 500, message: JSON.stringify(error) });
  }
};
