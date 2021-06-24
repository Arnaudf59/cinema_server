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
exports.filmController = void 0;
const film_1 = require("../models/film");
class FilmController {
    constructor() {
        this.findAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield film_1.Film.find())
                .end();
            next();
        });
        this.findById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield film_1.Film.findById(req.params.id))
                .end();
            next();
        });
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(201)
                .send(yield film_1.Film.create(req.body))
                .end();
            next();
        });
        this.update = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            yield film_1.Film.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
                if (data) {
                    res.status(200)
                        .send()
                        .end();
                }
                else {
                    res.status(404)
                        .send("Film inexistante")
                        .end();
                }
            });
            next();
        });
        this.delete = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield film_1.Film.findByIdAndRemove(req.params.id))
                .end();
            next();
        });
    }
}
exports.filmController = Object.freeze(new FilmController());
//# sourceMappingURL=film.controller.js.map