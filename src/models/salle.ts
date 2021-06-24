import mongoose from 'mongoose';

const salleSchema = new mongoose.Schema ({
    numero : {
        type: Number
    },
    nbPlaces : {
        type: Number
    }
})

export const Salle = mongoose.model("Salle", salleSchema);