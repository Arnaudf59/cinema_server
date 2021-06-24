"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Salle = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const salleSchema = new mongoose_1.default.Schema({
    numero: {
        type: Number
    },
    nbPlaces: {
        type: Number
    }
});
exports.Salle = mongoose_1.default.model("Salle", salleSchema);
//# sourceMappingURL=salle.js.map