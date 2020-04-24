import * as axios from "axios";
import React from 'react';


const instance = axios.create(
    {
        withCredentials: true,
        baseURL: `https://social-network.samuraijs.com/api/1.0`,
        headers: {
            "API-KEY": "33310757-bb32-4f32-be03-2ca324b4998c"
        }
    }
);

export const getUsers = (currentPage = 1 ,pageSize = 15) =>{
   return instance.get(`/users?page=${currentPage}&count=${pageSize}`,
        {withCredentials:true}).then(
                response => 
                {   
                    return response.data
                }
            )

}



