import type {Metadata} from 'next'
import './globals.css'
import {NavMenu} from "@/Components/UI/NavMenu/NavMenu";


export const metadata: Metadata = {
    title: 'Tvoe',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <>
            <NavMenu/>
            {children}
        </>

        </body>
        </html>
    )
}
