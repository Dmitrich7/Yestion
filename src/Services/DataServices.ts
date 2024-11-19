import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IWorkspace} from "../models/models";

const tokenHeader = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": localStorage.getItem("Authorization") ?? ""
}

export const dataApi = createApi({
    reducerPath: 'dataApi',
    baseQuery: fetchBaseQuery({baseUrl: "http://povt-cluster.tstu.tver.ru:44666"}),
    endpoints: (build)=> ({
        getWorkspaceList: build.query<IWorkspace,void>({
            query: ()=> ({
                url: `/api/data/workspacesList`,
                method: "GET",
                headers: tokenHeader
            })
        })
    })
})

