import axios from 'axios';

const GLOBAL_URL = 'https://covid19.mathdro.id/api';

export const getData = async (country) => {
  const URL = country ? `${GLOBAL_URL}/countries/${country}` : `${GLOBAL_URL}`;
  
  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(URL);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (err) {
    return err;
  }
};

export const getCountryList = async () => {
  try {
    const { data: { countries } } = await axios.get(`${GLOBAL_URL}/countries`);

    return countries.map((country) => country.name);
  } catch (err) {
    return err;
  }
};
