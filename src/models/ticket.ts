import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
    seance : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Seance"
    }
});

export const Ticket = mongoose.model("Ticket", ticketSchema);