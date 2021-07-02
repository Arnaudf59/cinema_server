import { Film } from "../models/film";
import { Seance } from "../models/seance";

class SeanceController {

    findAll = async (req, res, next) => {
        res.status(200)
           .send(await Seance.find().populate({path : 'cinema', populate : {path : 'salles'}}))
           .end();
        next();
    }

    findById = async (req, res, next) => {
        res.status(200)
           .send(await Seance.findById(req.params.id)).populate({path : 'cinema', populate : {path : 'salles'}})
           .end();
        next();
    }

    findByCinema = async (req, res, next) => {
        res.status(200)
           .send(await Seance.find({cinema : req.params.id}))
           .end();
        next();
    }

    findFilmsByCinema = async (req, res, next) => {
        let firstRequest = await Seance.find({"cinema" : `${req.params.id}`}).distinct("film");
        res.status(200)
            .send(await Film.find({ "_id" : {$in:firstRequest}}))
            .end();
        next();
    }

    findSeanceByFilmsAndCinema = async (req, res, next) => {
        res.status(200)
            .send(await Seance.find({"cinema" : `${req.params.id}`, "film": `${req.params.idfilm}`}))
            .end();
        next();
    }

    create = async (req, res, next) => {
        res.status(201)
           .send(await Seance.create(req.body))
           .end()
        next();
    }
}

export const seanceController = Object.freeze(new SeanceController());