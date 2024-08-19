import {model, models, Schema} from "mongoose";

const ResultSchema = new Schema({
  domain: {type: String, required: true},
  keyword: {type: String, required: true},
  brightDataResponseId: {type: String},
  rank: {type: Number , default : Math.floor(Math.random() * 2) + 1},
  complete: {type: Boolean, default: true},
}, {timestamps:true});

export const Result = models?.Result || model('Result', ResultSchema);