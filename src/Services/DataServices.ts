import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const userApi = createApi({
    reducerPath: 'dataApi',
    baseQuery: fetchBaseQuery({baseUrl: ""}),
    endpoints: (build)=> ({

    })
})
