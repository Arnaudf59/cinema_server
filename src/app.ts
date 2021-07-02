import express from 'express';
import colors from "colors";

import { setMongoConnect } from './config/mongoose.config';
import { setFilmRouting } from './routes/filmRoutes';
import { setCinemamRouting } from './routes/cinemaRoutes';
import { setSeanceRouting } from './routes/seanceRoutes';
import { setSalleRouting } from './routes/salleRoutes';
import cors from 'cors'

    const app = express();
    const port = 3000;

    app.use(express.json());
    app.use(cors());

    app.listen(port, () => {
        console.log(colors.green(`Serveur ecoute sur le port :`) + colors.yellow(`${port}`));
    });

    setMongoConnect();

    setFilmRouting(app);
    setCinemamRouting(app);
    setSeanceRouting(app);
    setSalleRouting(app);