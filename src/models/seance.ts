import mongoose from "mongoose";

const seanceShema = new mongoose.Schema ({

    numSalle : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "Salle"
    },
    date : {
        type : Date
    },
    cinema : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "Cinema"
    },
    film : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "Film"
    }
})

export const Seance = mongoose.model("Seance", seanceShema);