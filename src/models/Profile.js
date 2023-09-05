import { Schema, model, models } from "mongoose";

const profileSchema = new Schema(
  {
    title: {
      type: String,
      requierd: true,
    },
    desc: {
      type: String,
      requierd: true,
    },
    location: {
      type: String,
      requierd: true,
    },
    phone: {
      type: String,
      requierd: true,
    },
    realState: {
      type: String,
      requierd: true,
    },
    price: {
      type: Number,
      requierd: true,
    },
    constructionDate: {
      type: Date,
      requierd: true,
    },
    category: {
      type: String,
      enum: ["villa", "apartment", "shop", "office"],
      requierd: true,
    },
    aminities: {
      type: [String],
      default: [],
    },
    rules: {
      type: [String],
      default: [],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Profile = models.Profile || model("Profile", profileSchema);

export default Profile;
