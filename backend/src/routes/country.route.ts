import { Router } from "express";
import {
  getAllCountries,
  getCountryInformation,
} from "../controllers/countries.controller";

const router = Router();

router.get("/all-countries", getAllCountries);
router.get("/country-info/:countryName", getCountryInformation);
export default router;
