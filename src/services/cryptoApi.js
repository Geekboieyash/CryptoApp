import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';  

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '399fb23f27mshcdbb462666d2c1ap11207ajsn3d1de10920d0'
};


const baseUrl = 'https://coinranking1.p.rapidapi.com' ;
const createRequest = (url) => ({ url, headers: cryptoApiHeaders}) ;

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;


