"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSalleRouting = void 0;
const salle_controllers_1 = require("../controllers/salle.controllers");
const setSalleRouting = (app) => {
    const endpoint = "salles";
    app.get(`/${endpoint}`, salle_controllers_1.salleController.findAll);
    app.get(`/${endpoint}/:id`, salle_controllers_1.salleController.findById);
    app.post(`/${endpoint}`, salle_controllers_1.salleController.create);
};
exports.setSalleRouting = setSalleRouting;
//# sourceMappingURL=salleRoutes.js.map