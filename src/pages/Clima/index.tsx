import React, { useEffect, useRef, useState } from "react";
import { kelvinConverter } from "@/utils/kelvinConverter";
import { ICityWeatherInformation } from "@/store/reducers/cityWeatherInformation";
import * as S from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import {
  IWeatherInformation,
  WeatherService,
} from "@/services/weather.service";
import actions from "@/store/actions";
import { useDispatch } from "react-redux";
import { ICity } from "../Home/data";
import { useSearchParams } from "react-router-dom";
import Text from "@/components/Text";

export default function Clima() {
  const [loading, setLoading] = useState<boolean>(false);
  const ref = useRef(true);

  const [params] = useSearchParams();
  const lat = params.get("lat");
  const lon = params.get("lon");

  const dispatch = useDispatch();
  const cityWeatherInformation: ICityWeatherInformation = useSelector(
    (state: RootState) => state?.cityWeatherInformation
  );

  const getCityWeatherInformation = async (city: ICity) => {
    setLoading(true);
    const result: IWeatherInformation =
      await WeatherService.getWeatherInformation(city?.lat, city?.lon);

    dispatch(
      actions.setCityWeatherInformation({
        weather: result?.data?.weather,
        city: result?.data?.name,
        max: result?.data?.main?.temp_max,
        min: result?.data?.main?.temp_min,
        currentTemperature: result?.data?.main?.temp,
      })
    );

    setLoading(false);
  };

  useEffect(() => {
    const firstRender = ref.current;

    if (firstRender) {
      ref.current = false;
      getCityWeatherInformation({ lat: lat || 0, lon: lon || 0 });
    }
  }, [lat]);

  return (

    <S.WeatherInformationContainer>
      {loading ? (
        "Carregando..."
      ) : (
        <>


          <Text
            text={cityWeatherInformation.city}
            variant="h2"
            size="36px"
            color="#fff"
          />

          <Text
            text={`Current situation: ${
              cityWeatherInformation?.weather[0]?.description || ""
            }`}
            variant="h3"
            size="24px"
            color="#fff"
            
          />

          <S.WeatherInfoContainer>
            <main>
              <Text
                text={`Temp. Atual: ${kelvinConverter(
                  cityWeatherInformation.currentTemperature
                )}° C`}
                variant="span"
                size="20px"
                color="#fff"
              />
            </main>
           
          </S.WeatherInfoContainer>
          <S.WeatherInfoContainer>
            <main>
              <Text
                text={`Temp. Min: ${kelvinConverter(
                  cityWeatherInformation.min
                )}° C`}
                variant="span"
                size="20px"
                color="#fff"
              />
            </main>
            
          </S.WeatherInfoContainer>
          <S.WeatherInfoContainer>
            <main>
              <Text
                text={`Temp. Max: ${kelvinConverter(
                  cityWeatherInformation.max
                )}° C`}
                variant="span"
                size="20px"
                color="#fff"
              />{" "}
            </main>
            
          </S.WeatherInfoContainer>
        </>
      )}
    </S.WeatherInformationContainer>
  );
}
