"use client"
import styled from "styled-components";
import React, {FC, ReactNode} from "react";


const Root = styled.div`

  display: flex !important;
  flex-direction: row !important;


`

interface IProps {
    children: ReactNode
}

export const Wrapper: FC<IProps> = ({children}) => {
    return (
        <Root id={'Wrapper'}>
            {children}
        </Root>
    )
}