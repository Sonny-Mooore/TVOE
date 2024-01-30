"use client"
import styled from "styled-components";

// файл Elements содержит элементы которые мы изпользуем на странице /serial

export const MovieImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
`

type Container = {
    direction?: string | undefined
    gap?: number | undefined
}

export const Container = styled.div<Container>`
  display: flex;
  flex-direction: ${({direction}) => direction || "column"};
  gap: ${({gap}) => gap}px;
`

export const MovieButtonContainer = styled.div`
  display: flex;
  gap: 16px;
`;
export const MovieTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 32px;
`;
export const MovieText = styled.p`
  color: #FFF;
  font-size: 28px;
  border-radius: 12px;
  font-family: TT Norms Pro, sans-serif;
  font-weight: 400;
  width: 105px;

  &:first-of-type {
    background: rgba(255, 255, 255, 0.20);
    padding: 14px 22px;
    width: fit-content;
  }

  &:nth-of-type(2) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const MovieDecription = styled.p`
  color: #FFF;
  font-size: 28px;
  max-width: 735px;
  border-radius: 12px;
  font-weight: 500;
  margin: 0 0 112px 0;
`;


export const SerialText = styled.p`
  color: #FFF;
  font-size: 40px;
  font-weight: 700;
`;

export const SerialContainer = styled.div`
  display: flex;
  margin-top: 112px;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;

type SerialNext = {
    active?: string
}

export const SerialNext = styled.div<SerialNext>`
  display: flex;
  width: 40px;
  height: 40px;
  padding: 4px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #BABABA;
  cursor: pointer;
  border-radius: 100px;
  background: #232326;
  transition: all 0.2s ease;
  text-align: center;
  font-size: 24px;
  font-weight: 500;

  ${({active}) => active && `
    background: #FFF;
    color: #09090C;
  `}
  &:hover {
    background: #FFF;
    color: #09090C;
  }
`;


export const DescriptionTitle = styled.p`
  margin: 60px 0 0 0;
  color: #FFF;
  font-size: 40px;
  font-weight: 700;
`;

export const Description = styled.p`
  color: #FFF;
  font-size: 30px;
  font-weight: 400;
`;

export const Warning = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 24px;
  margin: 0 0 60px 0;
`;


export const WarningText = styled.p`
  color: #4B4B4B;
  font-size: 28px;
  font-weight: 400;
`;


export const Catalog = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CatalogTitle = styled.p`
  color: #FFF;
  gap: 24px;
  font-size: 40px;
  font-weight: 700;
`;




