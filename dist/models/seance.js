"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seance = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const seanceShema = new mongoose_1.default.Schema({
    numSalle: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Salle"
    },
    date: {
        type: Date
    },
    cinema: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Cinema"
    },
    film: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Film"
    }
});
exports.Seance = mongoose_1.default.model("Seance", seanceShema);
//# sourceMappingURL=seance.js.map