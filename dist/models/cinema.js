"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cinema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const cinemaSchema = new mongoose_1.default.Schema({
    nom: {
        type: String
    },
    salle: [{
            type: mongoose_1.default.Schema.Types.ObjectId
        }]
});
exports.Cinema = mongoose_1.default.model("Cinema", cinemaSchema);
//# sourceMappingURL=cinema.js.map