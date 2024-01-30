"use client"
import React, {FC} from 'react'
import styled from "styled-components";
import Image from "next/image";
import logo from '@/public/images/navMenu/Logo.svg'
import arrow from '@/public/images/navMenu/navButtons/arrow.svg'
import content from '@/assets/content.json'

const Root = styled.aside`
  //border: white 1px solid;
  height: auto;
  padding: 40px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 180px;
`

const NavContainer = styled.div`
  margin: 110px 0 0 0;
  display: flex;
  gap: 26px;
  flex-direction: column;
`

const NavLink = styled.a` cursor: pointer; `

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`


interface INavMenu {
    navMenu: {
        icon: string;
    }[];
}


const {navMenu}: INavMenu = content

export const NavMenu: FC = () => {


    return (
        <Root id={'navMenu'}>
            <Image priority src={logo} alt={'logo'}/>
            <NavContainer>
                {navMenu.map((navLink, index) => {
                    return (
                        <NavLink key={index}>
                            <Image priority
                                   width={44}
                                   height={44}
                                   src={navLink.icon}
                                   alt={'logo'}/>
                        </NavLink>
                    )
                })}
                <div style={{marginTop: "280px"}}>
                    <Button>
                        <Image priority src={arrow} alt={'logo'}/>
                    </Button>
                </div>
            </NavContainer>


        </Root>
    )
}
