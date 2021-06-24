import mongoose from "mongoose";

const filmSchema = new mongoose.Schema({

    nom : {
        type: String
    },
    duree : {
        type: Number
    }
})

export const Film = mongoose.model("Film", filmSchema);