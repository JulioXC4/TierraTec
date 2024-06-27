import express from "express";
import {getWeatherByLocation} from '../controllers/crop'

const cropRouter = express.Router()

cropRouter.get('/getWeather',getWeatherByLocation )

export default cropRouter;