import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "@/store/baseUrl";
import { IUserStartInfo } from "./userSlice";

export interface IAuth {
    email: string,
    password: string
}

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl, credentials: 'include' }),
    tagTypes: ["LOGIN"],
    endpoints: (builder) => ({
        createUser: builder.mutation<void, IAuth>({
            query: (body: IAuth) => ({
                method: "POST",
                url: "users/create",
                body: body
            }),
            invalidatesTags: ["LOGIN"]
        }),
        login: builder.mutation<void, IAuth>({
            query: (body: IAuth) => ({
                method: "POST",
                url: "users/check",
                body: body
            }),
            invalidatesTags: ["LOGIN"]
        }),
        isAuth: builder.query<IUserStartInfo, void>({
            query: () => ({
                method: "GET",
                url: "users/auth",
            }),
            providesTags: ["LOGIN"]
        })
    }),
});

export const {
    useIsAuthQuery,
    useCreateUserMutation,
    useLoginMutation
} = userApi;

export const checkIsAuth = (): boolean => !!useIsAuthQuery().data?.email;