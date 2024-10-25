import { Router } from "express";
import {
  getAllCountries,
  getCountryInformation,
} from "../controllers/countries.controller";

const router = Router();

router.get("/allcountries", getAllCountries);
router.get("/get-country-info/:countryName", getCountryInformation);
export default router;
