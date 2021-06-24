import mongoose from "mongoose";

const seanceShema = new mongoose.Schema ({

    numSalle : {
        type : mongoose.Schema.Types.ObjectId
    },
    date : {
        type : Date
    },
    cinema : {
        type : mongoose.Schema.Types.ObjectId
    },
    film : {
        type : mongoose.Schema.Types.ObjectId
    }
})

export const Seance = mongoose.model("Seance", seanceShema);