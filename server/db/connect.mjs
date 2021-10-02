import mongoose from 'mongoose';

//connect to DB
const dbURL = process.env.DB_URL || "mongodb://localhost:27017/Icloset";

export const connect = () =>{
mongoose.connect(dbURL,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => console.log('mongoDB is connected'))
  .catch((err) => console.log(err));
}