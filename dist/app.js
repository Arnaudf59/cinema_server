"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const colors_1 = __importDefault(require("colors"));
const mongoose_config_1 = require("./config/mongoose.config");
const filmRoutes_1 = require("./routes/filmRoutes");
const cinemaRoutes_1 = require("./routes/cinemaRoutes");
const seanceRoutes_1 = require("./routes/seanceRoutes");
const salleRoutes_1 = require("./routes/salleRoutes");
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const port = 3000;
app.use(express_1.default.json());
app.use(cors_1.default());
app.listen(port, () => {
    console.log(colors_1.default.green(`Serveur ecoute sur le port :`) + colors_1.default.yellow(`${port}`));
});
mongoose_config_1.setMongoConnect();
filmRoutes_1.setFilmRouting(app);
cinemaRoutes_1.setCinemamRouting(app);
seanceRoutes_1.setSeanceRouting(app);
salleRoutes_1.setSalleRouting(app);
//# sourceMappingURL=app.js.map