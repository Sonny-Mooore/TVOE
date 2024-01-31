"use client"
import styled from "styled-components";
import React, {FC, ReactNode} from 'react'


const isPaddingDisabled = ({padding}: IProps): string => padding ? "0" : "90px 0 0 0"

const Root = styled.main<IProps>`
  position: relative;
  overflow: hidden;
  padding: ${isPaddingDisabled};
`;

interface IProps {
    children: ReactNode
    padding?: string
}

export const Main: FC<IProps> = ({children, padding}) => {
    return (
        <Root padding={padding} id={'main'}>
            {children}
        </Root>
    )
}