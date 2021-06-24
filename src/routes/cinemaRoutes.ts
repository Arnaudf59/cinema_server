import { cinemaController } from "../controllers/cinema.controller";

export const setCinemamRouting = (app) => {
    
    const endpoint = "cinemas";

    app.get(`/${endpoint}`, cinemaController.findAll);
    app.get(`/${endpoint}/:id`, cinemaController.findById);

    app.post(`/${endpoint}`, cinemaController.create);
}