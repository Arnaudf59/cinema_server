"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSeanceRouting = void 0;
const seance_controller_1 = require("../controllers/seance.controller");
const setSeanceRouting = (app) => {
    const endpoint = "seances";
    app.get(`/${endpoint}`, seance_controller_1.seanceController.findAll);
    app.get(`/${endpoint}/:id`, seance_controller_1.seanceController.findById);
    app.post(`/${endpoint}`, seance_controller_1.seanceController.create);
};
exports.setSeanceRouting = setSeanceRouting;
//# sourceMappingURL=seanceRoutes.js.map