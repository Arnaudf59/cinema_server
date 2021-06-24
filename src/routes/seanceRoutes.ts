import { seanceController } from "../controllers/seance.controller";

export const setSeanceRouting = (app) => {

    const endpoint = "seances";

    app.get(`/${endpoint}`, seanceController.findAll);
    app.get(`/${endpoint}/:id`, seanceController.findById);

    app.post(`/${endpoint}`, seanceController.create);
}