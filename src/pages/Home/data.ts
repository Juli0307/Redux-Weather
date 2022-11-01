export interface ICity {
  city_name?: string;
  lat: string | number;
  lon: string | number;
}

export const Cities: ICity[] = [
  {
    city_name: "Itapecerica da Serra",
    lat: -23.71578318876042,
    lon: -46.84956184821746,
  },
  {
    city_name: "Balneário Camboriú",
    lat: -26.98812898716553,
    lon: -48.63388715168428,
  },
  {
    city_name: "Fortaleza",
    lat: -3.732136839506818,
    lon: -38.528928891794074,
  },
];
