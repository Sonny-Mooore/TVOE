"use client"
import styled from "styled-components";


const buttonActive: string = 'var(--Gradient-Accent, linear-gradient(90deg, #6A11CB 0%, #2575FC 100%))'
const buttonInactive: string = 'var(--gradient-white-50, linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.13) 50%, rgba(255, 255, 255, 0.10) 100%))'

interface IMovieButton {
    active?: string
    hover?: string
    opacity?: string
}

const setDisplayActive = ({active}: IMovieButton) => active ? buttonActive : buttonInactive

export const MovieButton = styled.button<IMovieButton>`
  display: flex;
  height: 80px;
  width: fit-content;
  padding: 24px 32px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 16px;
  background: ${setDisplayActive};
  backdrop-filter: blur(10px);
  color: #FFF;
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  line-height: 32px;
  transition: all linear 0.3s;

  ${({opacity}) => opacity && `
        &:hover {
         opacity: 0.8;
      }
  `}

  ${({hover}) => hover && `
        &:hover {
        background: rgb(253, 253, 253, 0.3);
      }
  `}

`;


