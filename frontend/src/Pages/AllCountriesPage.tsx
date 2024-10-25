import { useState, useEffect } from "react";
import countryService from "../Services/CountryService";
import { Country } from "../Models/Entities/Country";

const AllCountriesPage = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await countryService.getAllCountries();
        setCountries(data);
      } catch (error: any) {
        setError(error.message);
      }
    };
    fetchCountries();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Countries of the World</h1>
      <input
        type="text"
        className="mx-auto border-2 w-full my-3 rounded px-2 py-1"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {error && (
        <div className="text-red-500 mb-4">
          <p>Error: {error}</p>
        </div>
      )}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCountries.length > 0 &&
          filteredCountries.map((country: Country) => (
            <li
              key={country.countryCode}
              className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
            >
              <a
                href={`/country/${country.name}`}
                className="text-lg font-semibold text-blue-600 hover:underline"
              >
                {country.name}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AllCountriesPage;
