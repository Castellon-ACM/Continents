export interface Country {
  name: string;
  region: string;
  capital: string;
  languages: string[];
  flags: string;
}
  
  export class CountryService {
    // Método para obtener todos los países
    static async fetchCountries(): Promise<Country[]> {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();

        return data.map((country: any) => ({
          name: country.name.common || 'Unknown',
          region: country.region || 'Unknown',
          capital: country.capital ? country.capital[0] : 'No capital',
          languages: country.languages ? Object.values(country.languages) : [], 
          flags: country.flags ? country.flags.svg : 'No flag available', 
        }));
      } catch (error) {
        console.error('Error fetching countries data:', error);
        throw new Error('Error fetching countries data');
      }
    }

    static getContinents(countries: Country[]): string[] {
      const continentSet = new Set<string>();
  
      countries.forEach((country) => {
        if (country.region) {
          continentSet.add(country.region);
        }
      });
  
      return [...continentSet];
    }
  }