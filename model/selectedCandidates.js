import { Schema, model, models } from 'mongoose';

const CandidateSchema = new Schema({
  salutation: {
    type: String,
    required: [true, 'salutation is Required'],
  },
  name:{
    type: String,
    required: [true, 'Name   is required!'],
  },
  position: {
    type: String,
    required: [true, 'position is required!'],
  },
  fromDate:{
    type: Date,
    required:true
  },
  toDate:{
    type: Date,
    require:true
  },
  email:{
    type: String,
    required: [true, 'email is required!'],
  },
  uid:{
    type: String,
    required: [true, 'UID is required!'],
  },
  viewed:{
    type: Boolean,
    default:false
  },
  Certificate:{
    type: String,
    required: [true, 'Certificate is required!'],
  },

  }
  
  


  );
  

const Candidate = models.candidate || model("Candidate",CandidateSchema);

export default Candidate;