import { Cinema } from "../models/cinema";

class CinemaController {

    findAll = async (req, res, next) => {
        res.status(200)
           .send(await Cinema.find())
           .end();
        next();
    }

    findById = async (req, res, next) => {
        res.status(200)
           .send(await Cinema.findById(req.params.id))
           .end();
        next();
    }

    create = async (req, res, next) => {
        console.log(req.body);
        res.status(201)
           .send(await Cinema.create(req.body))
           .end()
        next();
    }
}

export const cinemaController = Object.freeze(new CinemaController());