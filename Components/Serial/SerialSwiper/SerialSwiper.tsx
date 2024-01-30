"use client"
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import styled from "styled-components";
import Image from "next/image";
import {FC} from "react";


const Root = styled.div`
  padding: 22px 0 10px 0;
  max-width: 1702px;
`;


const Serial = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all .2s ease;

  &:hover {
    transform: scale(1.01);
  }
`;

const SerialNumber = styled.p`
  color: #FFF;
  font-size: 28px;
  margin-top: 20px;
  font-weight: 500;
`;

const SerialDuration = styled.p`
  color: #BABABA;
  margin-top: 20px;
  font-size: 24px;
  font-weight: 400;
`;


interface IProps {
    serials: {
        image: string;
        number: string;
        duration: string;
    }[];
}

export const SerialSwiper: FC<IProps> = ({serials}) => {


    return (
        <Root id={'CatalogSwiper-Root'}>
            <Swiper
                centeredSlides={false}
                navigation={true}
                slidesPerView={3}
                style={{overflow:"unset"}}
                spaceBetween={30}>
                {serials.map((serial: any, index: number) => (
                    <SwiperSlide key={index}>
                        <Serial>
                            <Image height={306} width={544} alt={'serial-image'} src={serial.image}/>
                            <SerialNumber>{serial.number} серия</SerialNumber>
                            <SerialDuration>{serial.duration}</SerialDuration>
                        </Serial>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Root>

    );
};


