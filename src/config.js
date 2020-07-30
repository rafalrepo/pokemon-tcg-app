import axios from 'axios';

const API = "https://api.pokemontcg.io/";
const API_VERSION = 'v1';
export const API_RESOURCE = {
    cards: 'cards',
    sets: 'sets',
    types: 'types',
    subtypes: 'subtypes',
    supertypes: 'supertypes'
}


export const baseURL = axios.create({
    baseURL: `${API}/${API_VERSION}`
})
