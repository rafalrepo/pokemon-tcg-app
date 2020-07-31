import React, { useState, useEffect, createContext } from 'react';
import { API_RESOURCE, baseURL } from '../config'

export const CardsContext = createContext();

export const CardsProvider = ( { children } ) => {

    const [cards, setCards] = useState([]);
    const [name, setName] = useState('');
    const [page, setPage] = useState('');
    const [pageSize, setPageSize] = useState('3');
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchData =  async () => {
            const api = await baseURL.get(`${API_RESOURCE.cards}/?page=${page}&pageSize=${pageSize}&name=${name}`);
            const data = await api.data;
            const { cards } = {...data};
            setCards(cards)
            setLoading(false)
        }

        fetchData();

    }, [name, page, pageSize]);

    const value = [[cards, setCards], [name, setName], [page, setPage], [pageSize, setPageSize], [loading, setLoading]]

    return(
        <CardsContext.Provider value={value}>
            { children }
        </CardsContext.Provider>
    )
}