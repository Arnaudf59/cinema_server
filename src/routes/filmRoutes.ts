import {filmController} from '../controllers/film.controller'

export const setFilmRouting = (app) => {

    const endpoint = "films";

    app.get(`/${endpoint}`, filmController.findAll);
    app.get(`/${endpoint}/:id`, filmController.findById);

    app.post(`/${endpoint}`, filmController.create);

    app.patch(`/${endpoint}/:id`, filmController.update);

    app.delete(`/${endpoint}/:id`, filmController.delete);
}