"use client"
import React, {FC} from 'react'
import styled from "styled-components";
import content from '@/assets/content.json'

const {footerContent}: IFooter = content.serialPage

const Root = styled.footer`
  display: flex;
  margin: 60px 0 125px 0;
  flex-direction: column;
  width: fit-content;
  gap: 25px;
`;


const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
`;

const Title = styled.p`
  color: #FFF;
  font-size: 40px;
  font-weight: 700;
`;

type Text = {
    opacity?: number
    background?: string
}


const Text = styled.p<Text>`
  color: #FFF;
  font-size: 28px;
  font-weight: 400;
  opacity: 1;
  display: flex;
  align-items: center;

  &:nth-of-type(1) {
    opacity: 0.3;
  }

  &:nth-of-type(3) {
    opacity: 0.3;
  }


  ${({background}) => background && `
      &:nth-of-type(4) {
       border-radius: 8px;
       background: var(--gradient-white-50, linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.13) 50%, rgba(255, 255, 255, 0.10) 100%));
       backdrop-filter: blur(10px);
       width: 115px;
       padding: 12px;
      }
   
  `}
`;


const Footer: FC = () => {

    const {
        title,
        firstColumn,
        secondColumn,
        thirdColumn
    } = footerContent


    return (
        <Root>

            <Title>{title}</Title>

            <Container>

                <TextContainer>
                    {firstColumn.map((item: string, index: number) => {
                        return (
                            <Text key={index}>{item}</Text>
                        )
                    })}
                </TextContainer>

                <TextContainer>
                    {secondColumn.map((item: string, index: number) => {
                        return (
                            <Text key={index}> {item} </Text>
                        )
                    })}
                </TextContainer>

                <TextContainer>
                    {thirdColumn.map((item: string, index: number) => {
                        return (
                            <Text background={"true"} key={index}> {item} </Text>
                        )
                    })}
                </TextContainer>

            </Container>
        </Root>
    )
}
export default Footer;
