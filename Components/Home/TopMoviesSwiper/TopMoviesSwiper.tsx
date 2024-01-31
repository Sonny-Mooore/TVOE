"use client"
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import styled from "styled-components";
import Image from "next/image";
import {FC} from "react";


const Root = styled.div`
  margin: 22px 20px 10px 20px;
  max-width: 1702px;
  height: 610px;
`

const Movie = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  gap: -20px;

`
export const MovieCard = styled.div`
  position: relative;
  z-index: 1;
  margin: 0 0 0 -70px;
  transition: all .4s ease;

  //&:

  &:hover {
    transform: scale(1.03);
  }


`
export const MovieCardNumber = styled.div`
  position: relative;
  z-index: -1;
`

interface IProps {
    movies: {
        movieCardNumber: string;
        movieCard: string;
    }[];
}

export const TopMoviesSwiper: FC<IProps> = ({movies}) => {

    return (
        <Root id={'topMovies-Root'}>
            <Swiper
                centeredSlides={false}
                navigation={true}
                slidesPerView={2.5}
                style={{overflow: "unset"}}
                spaceBetween={-40}>
                {movies.map((topMovie: any, index: number) => (
                    <SwiperSlide key={index}>
                        <Movie>
                            <MovieCardNumber>
                                <Image height={300}
                                       width={241}
                                       layout={'responsive'}
                                       alt={'movie-image'}
                                       objectFit={'cover'}
                                       src={topMovie.movieCardNumber}/>
                            </MovieCardNumber>
                            <MovieCard>
                                <Image height={597}
                                       width={398}
                                       alt={'movie-image'}
                                       src={topMovie.movieCard}/>
                            </MovieCard>
                        </Movie>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Root>

    );
};


