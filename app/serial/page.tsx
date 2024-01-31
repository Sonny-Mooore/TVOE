import React, {FC} from 'react'
import {Main} from "@/Components/UI/Main/Main";
import {
    Container,
    MovieText,
    MovieTextContainer,
    MovieDecription,
    MovieButtonContainer,
    SerialContainer,
    SerialText,
    SerialNext,
    DescriptionTitle,
    Description,
    Warning,
    WarningText,
    Catalog,
    CatalogTitle,
    MovieImage
} from '@/Components/Serial/Elements'
import {MovieButton} from '@/Components/UI/MovieButton/MovieButton'
import Image from "next/image";
import wednesday from '@/public/images/serial/wednesday.png';
import wednesdayTitle from '@/public/images/serial/wednesday-title.png';
import like from '@/public/images/serial/like.png';
import favorite from '@/public/images/serial/favorite.png';
import content from '@/assets/content.json'

import {SerialSwiper} from "@/Components/Serial/SerialSwiper/SerialSwiper";
import {CatalogSwiper} from "@/Components/Serial/CatalogSwiper/CatalogSwiper";
import Footer from "@/Components/Serial/Footer/Footer";


const {serialPage}: ISerial = content;


const Serial: FC = () => {

    const {
        aboutFilm,
        serials,
        description,
        warning,
        catalog
    } = serialPage;

    return (
        <>
            <Main>
                <MovieImage>
                    <Image height={780} src={wednesday} alt={'wednesday'}/>
                </MovieImage>
                <Container gap={25}>
                    <Image src={wednesdayTitle} alt={'wednesday'}/>
                    <MovieTextContainer>
                        {aboutFilm.map((item: string, index: number) => {
                            return (
                                <MovieText key={index}>{item}</MovieText>
                            )
                        })}
                    </MovieTextContainer>
                    <MovieDecription>
                        Уэнсдэй предстоит освоить экстрасенсорные cпособности, чтобы остановить местного серийного
                        убийцу и раскрыть тайну родителей.
                    </MovieDecription>
                    <MovieButtonContainer>
                        <MovieButton active={"true"}>Смотреть</MovieButton>
                        <MovieButton hover={"true"}>Трейлер</MovieButton>
                        <MovieButton hover={"true"}>
                            <Image alt={'icon'} src={like}/>
                        </MovieButton>
                        <MovieButton hover={"true"}>
                            <Image alt={'icon'} src={favorite}/>
                        </MovieButton>
                    </MovieButtonContainer>
                </Container>

                <SerialContainer>
                    <Container gap={44} direction={'row'}>
                        <SerialText>Сезоны</SerialText>
                        <Container gap={25} direction={'row'}>
                            <SerialNext active={"true"}>1</SerialNext>
                            <SerialNext>2</SerialNext>
                            <SerialNext>3</SerialNext>
                        </Container>
                    </Container>
                    <SerialSwiper serials={serials}/>
                </SerialContainer>

                <Container gap={24}>
                    <DescriptionTitle>
                        {description.title}
                    </DescriptionTitle>
                    <Description>
                        {description.text}
                    </Description>
                    <Warning>
                        <Image width={47}
                               height={47}
                               src={warning.icon}
                               alt={'wednesday'}/>
                        <WarningText>{warning.text}</WarningText>
                    </Warning>
                </Container>

                <Catalog>
                    <CatalogTitle>{catalog.title}</CatalogTitle>
                    <CatalogSwiper cards={catalog.content}/>
                </Catalog>

                <Footer/>

            </Main>
        </>
    )
}


export default Serial;
