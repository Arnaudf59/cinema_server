"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seanceController = void 0;
const film_1 = require("../models/film");
const seance_1 = require("../models/seance");
class SeanceController {
    constructor() {
        this.findAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield seance_1.Seance.find().populate({ path: 'cinema', populate: { path: 'salles' } }))
                .end();
            next();
        });
        this.findById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield seance_1.Seance.findById(req.params.id)).populate({ path: 'cinema', populate: { path: 'salles' } })
                .end();
            next();
        });
        this.findByCinema = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield seance_1.Seance.find({ cinema: req.params.id }))
                .end();
            next();
        });
        this.findFilmsByCinema = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let firstRequest = yield seance_1.Seance.find({ "cinema": `${req.params.id}` }).distinct("film");
            res.status(200)
                .send(yield film_1.Film.find({ "_id": { $in: firstRequest } }))
                .end();
            next();
        });
        this.findSeanceByFilmsAndCinema = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield seance_1.Seance.find({ "cinema": `${req.params.id}`, "film": `${req.params.idfilm}` }))
                .end();
            next();
        });
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(201)
                .send(yield seance_1.Seance.create(req.body))
                .end();
            next();
        });
    }
}
exports.seanceController = Object.freeze(new SeanceController());
//# sourceMappingURL=seance.controller.js.map