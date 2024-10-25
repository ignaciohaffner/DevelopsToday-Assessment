export interface PopulationCount {
  year: number;
  value: number;
}

class CountryInformation {
  countryCode: string;
  commonName: string;
  officialName: string;
  border: string[];
  flagUrl: string;
  populationCounts: PopulationCount[];

  constructor(
    countryCode: string,
    commonName: string,
    officialName: string,
    border: string[],
    flagUrl: string,
    populationCounts: PopulationCount[] = []
  ) {
    this.countryCode = countryCode;
    this.commonName = commonName;
    this.officialName = officialName;
    this.border = border;
    this.flagUrl = flagUrl;
    this.populationCounts = populationCounts;
  }
}

export default CountryInformation;
