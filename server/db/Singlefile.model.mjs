import mongoose from 'mongoose';

export const singleFileSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true
  },
  filePath: {
    type: String,
    required: true
  },
  fileType: {
    type: String,
    required: true
  },
  fileSize: {
    type: String,
    required: true
  },
 type: {//top/bottom/shoes
    type: String,
    //required:true
  },
  productType: {//pants, skirt, shorts, dress,shoes
    type: String,
    //required: true
  }
}, {timestamps : true});

export const SingleFile = mongoose.model('SingleFile', singleFileSchema);