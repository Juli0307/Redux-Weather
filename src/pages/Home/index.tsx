import React, { useEffect, useState } from "react";
import { Navigate, redirect } from "react-router-dom";

import { Cities, ICity } from "./data";
import * as S from "./styles";
import Text from "@/components/Text";
// @ts-ignore
import LogoImage from "@/assets/Logo.svg"; 
// @ts-ignore
import IlustrationImage from "@/assets/ilustration.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (

    <S.HomeContainer>
      <S.Logo src={LogoImage} alt="IlustraçãoL" />
        
    
      <S.Ilustration src={IlustrationImage} alt="Ilustração" />
      <S.CitiesContainer>
        <Text
          text="Select a City"
          variant="h2"
          color="#fff"
          size="36px"
        />
        <S.CitiesOptionsContainer>
          {Cities.map((city: ICity) => (
            <Link to={`/clima?lat=${city.lat}&lon=${city.lon}`}>
              <S.CityButton>{city.city_name}</S.CityButton>
            </Link>
          ))}
        </S.CitiesOptionsContainer>
      </S.CitiesContainer>
    </S.HomeContainer>
  );
}
