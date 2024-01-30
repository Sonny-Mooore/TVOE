"use client"
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import styled from "styled-components";
import Image from "next/image";
import {FC} from "react";
import {useRouter} from "next/navigation";


const Root = styled.div`
  margin: 22px 0 10px 0;
  max-width: 1702px;
  height: 655px;
`

const Movie = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all .2s ease;


  &:hover {
    transform: scale(1.01);
  }
`

const MovieName = styled.p`
  color: #FFF;
  font-size: 28px;
  margin-top: 20px;
  font-weight: 500;
`

const MovieRating = styled.p`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  width: 75px;
  height: 48px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 12px;
  background: var(--Gradient-Accent, linear-gradient(90deg, #6A11CB 0%, #2575FC 100%));


  color: #FFF;
  text-align: center;
  font-size: 28px;
  font-weight: 500;
`


interface IProps {
    movies: {
        image: string;
        rating: string;
        name: string;
    }[];
}

export const MoviesSwiper: FC<IProps> = ({movies}) => {

    const router = useRouter()

    const handleMovieOpen = () => router.push("/serial")


    return (
        <Root id={'MoviesSwiper-Root'}>
            <Swiper
                centeredSlides={false}
                navigation={true}
                slidesPerView={4}
                style={{overflow:"unset"}}
                spaceBetween={60}>
                {movies.map((movie: any, index: number) => (
                    <SwiperSlide key={index}>
                        <Movie onClick={index === 0 ? handleMovieOpen : undefined}>
                            <MovieRating>{movie.rating}</MovieRating>
                            <Image height={597}
                                   width={398}
                                   style={{borderRadius:"12px"}}
                                   alt={'movie-image'}
                                   src={movie.image}/>
                            <MovieName>{movie.name}</MovieName>
                        </Movie>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Root>

    );
};


