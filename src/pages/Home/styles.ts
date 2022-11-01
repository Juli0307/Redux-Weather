import styled from "styled-components";

export const CitiesContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 128px;
  background-color: #1E1E1E;
`;

export const HomeContainer = styled.div`
  padding: 32px;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const CitiesOptionsContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 50%;
`;

export const CityButton = styled.div<{ isSelected?: boolean }>`
  width: 250px;
  padding: 16px;
  display: flex;
  height: 100%;
  align-items: center;
  border-radius: 8px;
  color: #000;
  font-weight: 600;
  border: 1px solid #81D8F7;
 


  background-color: ${({ isSelected }) =>
    isSelected ? "#2563eb" : "#81D8F7 " };

  &:hover {
    background-color:#2563EB ;
    cursor: pointer;
    opacity: 1;
  }
`;

export const Logo = styled.img`
  width: 148px;
  height: 148px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Ilustration = styled.img`
  position: fixed;
  right: 0;
  bottom: 0;
`;
