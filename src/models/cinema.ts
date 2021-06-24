import mongoose from "mongoose";

const cinemaSchema = new mongoose.Schema({

    nom : {
        type: String
    },
    salle : [{
        type: mongoose.Schema.Types.ObjectId
    }]    
})

export const Cinema = mongoose.model("Cinema", cinemaSchema);