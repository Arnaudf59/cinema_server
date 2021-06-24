"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setFilmRouting = void 0;
const film_controller_1 = require("../controllers/film.controller");
const setFilmRouting = (app) => {
    const endpoint = "films";
    app.get(`/${endpoint}`, film_controller_1.filmController.findAll);
    app.get(`/${endpoint}/:id`, film_controller_1.filmController.findById);
    app.post(`/${endpoint}`, film_controller_1.filmController.create);
    app.patch(`/${endpoint}/:id`, film_controller_1.filmController.update);
    app.delete(`/${endpoint}/:id`, film_controller_1.filmController.delete);
};
exports.setFilmRouting = setFilmRouting;
//# sourceMappingURL=filmRoutes.js.map