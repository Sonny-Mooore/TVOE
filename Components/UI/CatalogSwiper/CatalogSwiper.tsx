"use client"
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import styled from "styled-components";
import Image from "next/image";
import {FC} from "react";


const Root = styled.div`
  padding: 22px 0 0 0;
  max-width: 1702px;
  height: 400px;
`


const CatalogCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 255px;
  cursor: pointer;
  transition: all .4s ease;

  &:hover {
    transform: scale(1.06);
  }
`


const CatalogRating = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  width: 59px;
  height: 49px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: var(--Gradient-Accent, linear-gradient(90deg, #6A11CB 0%, #2575FC 100%));
  color: #FFF;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
`


interface IProps {
    cards: {
        rating: string;
        movieCard: string;
    }[]

}

export const CatalogSwiper: FC<IProps> = ({cards}) => {


    return (
        <Root id={'CatalogSwiper-Root'}>
            <Swiper
                centeredSlides={false}
                navigation={true}
                style={{overflow: 'unset'}}
                slidesPerView={6}
                spaceBetween={80}>
                {cards.map((item: any, index: number) => {
                    return (
                        <SwiperSlide key={index}>
                            <CatalogCard>
                                <CatalogRating>{item.rating}</CatalogRating>
                                <Image height={382}
                                       width={255}
                                       src={item.movieCard}
                                       alt={'serial-image'}/>
                            </CatalogCard>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </Root>

    );
};


