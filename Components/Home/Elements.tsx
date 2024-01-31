"use client"
import styled from "styled-components";

// файл Elements содержит элементы которые мы изпользуем на страницах

export const MovieImage = styled.div`
  position: relative;
  background-image: url("/images/home/indiana-johns.png");
  background-repeat: no-repeat;
  background-size: 1250px 800px;
  background-position: right;
  height: 800px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const MovieImageContainer = styled.div`
  display: flex;
  width: fit-content;
  padding:290px 0 0 0 ;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

type Container = {
    direction?: string | undefined
    gap?: number | undefined
}

export const Container = styled.div<Container>`
  position: relative;
  display: flex;
  align-items: start;
  flex-direction: ${({direction}) => direction || "column"};
  gap: ${({gap}) => gap || 0}px;
  justify-content: center;
`;

export const MovieDecription = styled.p`
  color: #FFF;
  font-size: 28px;
  text-align: center;
  max-width: 640px;
  border-radius: 12px;
  font-weight: 500;
  margin: 0 0 36px 0;
`;


export const NewMovieContainer = styled.div`
    margin: 95px 0 110px 0;
`;

export const NewMovieName = styled.p`
  color: #FFF;
  font-size: 40px;
  font-weight: 700;
`;

export const TopMoviesAccent = styled.p`
  text-transform: uppercase;
  font-size: 52px;
  font-family: TT Norms Pro, sans-serif;
  background: linear-gradient(90deg,#6a11cb,#2575fc 100%,#2575fc 0);
  background-size: 200% 200%;
  font-style: italic;
  font-weight: 900;
  line-height: 1.1;
  color: #09090c;
  padding-right: 5px;
  width: fit-content;
  -webkit-background-clip: text;
  -webkit-text-stroke: 4px transparent;
`;

export const TopMoviesName = styled.p`
  color: #FFF;
  font-size: 40px;
  font-weight: 700;
`;



