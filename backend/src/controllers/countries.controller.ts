// import { Country } from "../models/country.model";
import { Request, Response } from "express";
import axios from "axios";
import Country, { PopulationCount } from "../model/entities/country.model";

const BASE_URL = process.env.BASE_URL;
const BASE_URL_COUNTRIESNOW = process.env.BASE_URL_COUNTRIESNOW;

export const getAllCountries = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${BASE_URL}/AvailableCountries`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

const fetchPopulationCounts = async (
  countryName: string
): Promise<PopulationCount[]> => {
  const response = await axios.get(
    `${BASE_URL_COUNTRIESNOW}/population/q?country=${countryName}`
  );
  return response.data.data.populationCounts;
};

const fetchFlagData = async (
  countryName: string
): Promise<{ flagUrl: string; iso2: string }> => {
  const response = await axios.get(
    `${BASE_URL_COUNTRIESNOW}/flag/images/q?country=${countryName}`
  );
  const { flag: flagUrl, iso2 } = response.data.data;
  return { flagUrl, iso2 };
};

const fetchBorderData = async (
  iso2: string
): Promise<{ commonName: string; officialName: string; borders: string[] }> => {
  const response = await axios.get(`${BASE_URL}/countryinfo/${iso2}`);
  const { commonName, officialName, borders } = response.data;
  const borderCommonNames = borders.map((border: any) => border.commonName);
  return { commonName, officialName, borders: borderCommonNames };
};

export const getCountryInformation = async (req: Request, res: Response) => {
  const { countryName } = req.params;

  try {
    const populationCounts = await fetchPopulationCounts(countryName);
    const { flagUrl, iso2 } = await fetchFlagData(countryName);
    const { commonName, officialName, borders } = await fetchBorderData(iso2);

    const country = new Country(
      countryName,
      commonName,
      officialName,
      borders,
      flagUrl,
      populationCounts
    );

    res.status(200).json(country);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: true,
      message: "Error fetching country data",
    });
  }
};
