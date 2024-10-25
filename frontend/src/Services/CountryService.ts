import axios from "axios";
import { Country } from "../Models/Entities/Country";
import CountryInformation from "../Models/Entities/CountryInformation";

const countryBaseUrl = "http://localhost:3000/api";

class CountryService {
  getAllCountries = async (): Promise<Country[]> => {
    try {
      const response = await axios.get<Country[]>(
        `${countryBaseUrl}/all-countries`
      );
      return response.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  getCountryInformation = async (
    countryName: string
  ): Promise<CountryInformation> => {
    try {
      const response = await axios.get<CountryInformation>(
        `${countryBaseUrl}/country-info/${countryName}`
      );
      return response.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
export default new CountryService();
