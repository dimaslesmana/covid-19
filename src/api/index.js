import axios from 'axios';

const GLOBAL_URL = 'https://covid19.mathdro.id/api';
const INDONESIA_URL = 'https://apicovid19indonesia-v2.vercel.app/api/indonesia';

export const getData = async (country) => {
  const URL = country ? `${GLOBAL_URL}/countries/${country}` : GLOBAL_URL;
  
  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(URL);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const getCountryList = async () => {
  try {
    const { data: { countries } } = await axios.get(`${GLOBAL_URL}/countries`);

    return countries.map((country) => country.name);
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const getIndonesiaData = async () => {
  try {
    const { data: { total, penambahan } } = await axios.get(`${INDONESIA_URL}/more`);

    return { total, penambahan};
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const getIndonesiaHarian = async () => {
  try {
    const { data } = await axios.get(`${INDONESIA_URL}/harian`);

    return data;
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const getIndonesiaProvinsi = async () => {
  try {
    const { data } = await axios.get(`${INDONESIA_URL}/provinsi/more`);

    return data;
  } catch (err) {
    console.error(err);
    return err;
  }
};
