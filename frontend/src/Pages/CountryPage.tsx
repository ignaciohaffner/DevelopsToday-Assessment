import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import countryService from "../Services/CountryService";
import CountryInformation from "../Models/Entities/CountryInformation";
import Chart from "../Components/Chart";
import UndoIcon from "../Components/UndoIcon";

const CountryPage = () => {
  const [country, setCountry] = useState<CountryInformation | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { countryCode } = useParams<{ countryCode: string }>();

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        if (!countryCode) return;
        const data: CountryInformation =
          await countryService.getCountryInformation(countryCode);
        console.log(data);
        setCountry(data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
      }
    };
    fetchCountry();
  }, [countryCode]);

  return (
    <div>
      <a href="/" className="flex flex-row">
        <UndoIcon className="h-6 w-6" /> Get Back
      </a>
      {error && (
        <div className="text-red-500 mb-4">
          <p>Error: {error}</p>
        </div>
      )}
      {loading && <p>Loading...</p>}
      {country && (
        <div className="container mx-auto px-12 py-4">
          <div className="flex flex-col md:flex-row items-center mb-6">
            <img
              src={country.flagUrl}
              alt={`Flag of ${country.commonName}`}
              className="w-32 h-auto mr-4 mb-4 md:mb-0"
            />
            <div>
              <h1 className="text-3xl font-bold">{country.commonName}</h1>
              <p className="text-xl text-gray-600">{country.officialName}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">
                Country Information
              </h2>
              <p>
                <strong>Country Code:</strong> {country.countryCode}
              </p>
              <p>
                <strong>Common Name:</strong> {country.commonName}
              </p>
              <p>
                <strong>Official Name:</strong> {country.officialName}
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Border Countries</h2>
              {country.border.length > 0 ? (
                <ul className="grid grid-cols-2 gap-2">
                  {country.border.map((border) => (
                    <li key={border} className="border rounded p-2">
                      <a
                        href={`/country/${border}`}
                        className="text-blue-600 hover:underline"
                      >
                        {border}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>This country has no bordering countries.</p>
              )}
            </div>
          </div>
          {country.populationCounts.length > 0 && (
            <Chart data={country.populationCounts} />
          )}
        </div>
      )}
    </div>
  );
};

export default CountryPage;
