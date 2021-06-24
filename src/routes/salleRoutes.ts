import { salleController } from "../controllers/salle.controllers";

export const setSalleRouting = (app) => {

    const endpoint = "salles";

    app.get(`/${endpoint}`, salleController.findAll);
    app.get(`/${endpoint}/:id`, salleController.findById);

    app.post(`/${endpoint}`, salleController.create);
}