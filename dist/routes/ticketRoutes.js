"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTicketRouting = void 0;
const ticket_controller_1 = require("../controllers/ticket.controller");
const setTicketRouting = (app) => {
    const endpoint = 'tickets';
    app.get(`/${endpoint}`, ticket_controller_1.ticketController.findAll);
    app.get(`/${endpoint}/:id`, ticket_controller_1.ticketController.findById);
    app.get(`/${endpoint}/:id/impression`, ticket_controller_1.ticketController.findByIdAndImpress);
    app.post(`/${endpoint}`, ticket_controller_1.ticketController.create);
};
exports.setTicketRouting = setTicketRouting;
//# sourceMappingURL=ticketRoutes.js.map