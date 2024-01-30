interface ISerial {
    serialPage: {
        aboutFilm: string[]
        serials: {
            image: string
            number: string
            duration: string
        }[],
        description: {
            title: string
            text: string
        }

        warning: {
            text: string
            icon: string
        }

        catalog: {
            title: string
            content: {
                rating: string
                movieCard: string
            }[]
        }
    }

}