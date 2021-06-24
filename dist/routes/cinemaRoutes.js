"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCinemamRouting = void 0;
const cinema_controller_1 = require("../controllers/cinema.controller");
const setCinemamRouting = (app) => {
    const endpoint = "cinemas";
    app.get(`/${endpoint}`, cinema_controller_1.cinemaController.findAll);
    app.get(`/${endpoint}/:id`, cinema_controller_1.cinemaController.findById);
    app.post(`/${endpoint}`, cinema_controller_1.cinemaController.create);
};
exports.setCinemamRouting = setCinemamRouting;
//# sourceMappingURL=cinemaRoutes.js.map