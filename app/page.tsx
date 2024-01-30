import React, {FC} from "react";
import {Main} from "@/Components/UI/Main/Main";
import {Wrapper} from "@/Components/UI/Wrapper/Wrapper";
import Image from "next/image";
import {
    Container,
    MovieImage,
    MovieDecription,
    MovieImageContainer,
    NewMovieName,
    NewMovieContainer,
    TopMoviesName,
    TopMoviesAccent,
} from "@/Components/Home/Elements";
import {TopMoviesSwiper} from '@/Components/Home/TopMoviesSwiper/TopMoviesSwiper'
import indianaTitle from '@/public/images/home/indiana-johns-title.png'
import {MovieButton} from "@/Components/UI/MovieButton/MovieButton";
import content from '@/assets/content.json'
import {MoviesSwiper} from "@/Components/Home/MoviesSwiper/MoviesSwiper";


const {homePage}: IHome = content

const Home: FC = () => {

    const {
        movieDescription,
        newMovies,
        topMovies
    } = homePage

    return (
        <Wrapper>
            <Main padding={"true"}>
                <Container gap={25}>
                    <MovieImage>
                        <MovieImageContainer>
                            <Image priority src={indianaTitle} alt={'wednesday'}/>
                            <div>
                                <MovieDecription>
                                    {movieDescription}
                                </MovieDecription>
                                <Container direction={'row'} gap={24}>
                                    <MovieButton active={"true"}>Смотреть</MovieButton>
                                    <MovieButton>О фильме</MovieButton>
                                </Container>
                            </div>
                        </MovieImageContainer>
                    </MovieImage>
                </Container>

                <NewMovieContainer>
                    <Container>
                        <NewMovieName>{newMovies.name}</NewMovieName>
                        <Container direction={'row'}>
                            <MoviesSwiper movies={newMovies.movies}/>
                        </Container>
                    </Container>
                </NewMovieContainer>

                <Container gap={30}>
                    <Container direction={'row'} gap={28}>
                        <TopMoviesAccent>ТОП-10</TopMoviesAccent>
                        <TopMoviesName>просмотров за неделю</TopMoviesName>
                    </Container>
                    <Container id={'topMovies'} direction={'row'}>
                        <TopMoviesSwiper movies={topMovies.content}/>
                    </Container>
                </Container>
            </Main>
        </Wrapper>
    )
}
export default Home;