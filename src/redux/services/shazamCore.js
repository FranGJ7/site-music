import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"


    export const shazamCoreApi = createApi({
       reducerPath: "shazamCoreApi",
       baseQuery: fetchBaseQuery({
        baseUrl:"https://shazam-core.p.rapidapi.com/v1",
        prepareHeaders:(headers)=>{
            headers.set("X-RAPIDAPI-KEY", "f5512dc471mshacefb7e4a5e035bp1c9282jsn0d7056d84f68")
            return headers
        }
       }),
       endpoints: (builder)=>({
        getTopCharts: builder.query({query: ()=> '/charts/world'})
       })
    });


    export const {useGetTopChartsQuery}= shazamCoreApi






    
