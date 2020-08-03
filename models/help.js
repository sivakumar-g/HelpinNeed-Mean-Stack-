var mongoose = require("mongoose");
 //  var Schema = mongoose.Schema;
const pointSchema = new mongoose.Schema({
    name: String,
    title : String, 
    description: String,
    contact: String, 
    location:{
    type: {
      type: String,
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    },
    address: String,
}
  },
   {
    timestamps: true
   }
  
  );
pointSchema.index({ location: "2dsphere" });
var help = mongoose.model("help", pointSchema);
module.exports = help;




module.exports.addhelp = function(newhelp, callback){
  newhelp.save(callback);
  
}
