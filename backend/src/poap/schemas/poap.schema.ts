import { Schema } from 'mongoose';

export const PoapSchema = new Schema({
  idPoap: { type: String, required: true },
  namePoap: String,
  createdat: {
    type: Date,
    default: Date.now,
  },
});
