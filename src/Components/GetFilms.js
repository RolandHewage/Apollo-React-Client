import  React, { useEffect, useState }  from 'react'
import { useQuery, gql } from '@apollo/client'
import { LOAD_FILMS } from '../GraphQL/Queries'

function GetFilms() {
    const {error, loading, data} = useQuery(LOAD_FILMS)

    const [films, setFilms] = useState([]);
    useEffect(() => {
        if(data) {
            setFilms(data.allFilms.films)
        }
    }, [data]);

    return (
        <div>
            {
                films.map((film)=> {
                    return <h1>{film.title}</h1>
                })
            }
        </div>
    )
}

export default GetFilms
