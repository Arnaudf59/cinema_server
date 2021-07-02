import { seanceController } from "../controllers/seance.controller";

export const setSeanceRouting = (app) => {

    const endpoint = "seances";

    app.get(`/${endpoint}`, seanceController.findAll);
    app.get(`/${endpoint}/:id`, seanceController.findById);
    app.get(`/${endpoint}/cinema/:id`, seanceController.findByCinema);
    app.get(`/${endpoint}/film/cinema/:id`, seanceController.findFilmsByCinema);
    app.get(`/${endpoint}/cinema/:id/film/:idfilm`, seanceController.findSeanceByFilmsAndCinema);

    app.post(`/${endpoint}`, seanceController.create);
}