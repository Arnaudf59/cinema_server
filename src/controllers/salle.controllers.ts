import { Cinema } from "../models/cinema";
import { Salle } from "../models/salle";

class SalleController {

    findAll = async (req, res, next) => {
        res.status(200)
           .send(await Salle.find())
           .end();
        next();
    }

    findById = async (req, res, next) => {
        res.status(200)
           .send(await Salle.findById(req.params.id))
           .end();
        next();
    }

    findByCinema = async (req, res, next) => {
        let cinema_id = await Cinema.findById(req.params.id);
    }

    create = async (req, res, next) => {
        res.status(201)
           .send(await Salle.create(req.body))
           .end()
        next();
    }

}

export const salleController = Object.freeze(new SalleController());