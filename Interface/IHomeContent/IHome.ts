interface IHome {
    homePage: {
        movieDescription: string
        newMovies: {
            name: string
            movies: {
                image: string
                rating: string
                name: string
            }[]
        }
        topMovies: {
            accent: string
            name: string
            content: {
                movieCardNumber: string
                movieCard: string
            }[]
        }
    }
}