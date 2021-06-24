import { Seance } from "../models/seance";

class SeanceController {

    findAll = async (req, res, next) => {
        res.status(200)
           .send(await Seance.find())
           .end();
        next();
    }

    findById = async (req, res, next) => {
        res.status(200)
           .send(await Seance.findById(req.params.id))
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