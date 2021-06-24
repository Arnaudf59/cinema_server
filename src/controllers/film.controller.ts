import { Film } from "../models/film"

class FilmController {

    findAll = async (req, res, next) => {
        res.status(200)
           .send(await Film.find())
           .end();
        next();
    }

    findById = async (req, res, next) => {
        res.status(200)
           .send(await Film.findById(req.params.id))
           .end();
        next();
    }

    create = async (req, res, next) => {
        res.status(201)
           .send(await Film.create(req.body))
           .end()
        next();
    }

    update = async (req, res, next) => {
        await Film.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
            if(data) {
                res.status(200)
                .send()
                .end();
            }else{
                res.status(404)
                   .send("Film inexistante")
                   .end()
            }
        })
        next();
    }

    delete = async (req, res, next) => {
        res.status(200)
           .send(await Film.findByIdAndRemove(req.params.id))
           .end();
        next();
    }
}

export const filmController = Object.freeze(new FilmController());