import { FEEDBACK_URL, USERS_URL } from "../../constants";
import { PATIENT_URL } from "../../constants";
import { apiSlice } from "./apiSlice";


export const usersApliSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: USERS_URL + '/login',
                method: 'POST',
                body: credentials
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: USERS_URL + '/logout',
                method: 'POST'
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: PATIENT_URL + '/register',
                method: 'POST',
                body: data
            }),
        }),
        feedback: builder.mutation({
            query: (data) => ({
                url: FEEDBACK_URL ,
                method: 'POST',
                body: data
            }),
        }),
        getFeedback: builder.query({
            query: () => ({
                url: FEEDBACK_URL 
            }),
            providesTags: ['Feedbacks']
        }),
        getPatient: builder.query({
            query: () => ({
                url: PATIENT_URL + '/all'
            }), 
            providesTags: ['Patients']
        }),
    })
})


export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useFeedbackMutation,
    useGetFeedbackQuery, useGetPatientQuery } = usersApliSlice;
