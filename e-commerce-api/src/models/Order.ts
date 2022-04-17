import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: {
      type: Number,
      required: true,
    },
    adress: {
      type: Object,
      required: true,
      status: {
        type: String,
        default: "pending",
      },
    },
  },
  { timestamps: true }
);

export const OrderSchema = mongoose.model("Order", schema);
