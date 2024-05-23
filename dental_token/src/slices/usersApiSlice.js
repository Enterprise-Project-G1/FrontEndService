import { FEEDBACK_URL, USERS_URL, NOTIFICATION_URL } from "../constants";
import { PATIENT_URL, APPOINTMENT_URL, USER_URL } from "../constants";
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
                url: FEEDBACK_URL,
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
        checkEmail: builder.mutation({
            query: (data) => ({
                url: PATIENT_URL + '/isEmailUnique',
                method: 'POST',
                body: data
            }),
        }),
        checkNumber: builder.mutation({
            query: (data) => ({
                url: PATIENT_URL + '/isNumberUnique',
                method: 'POST',
                body: data
            }),
        }),
        postAppointment: builder.mutation({
            query: (data) => ({
                url: APPOINTMENT_URL,
                method: 'POST',
                body: data
            }),
        }),
        getAppointment: builder.query({
            query: () => ({
                url: APPOINTMENT_URL
            }),
            providesTags: ['Appointments']
        }),
        getUsers: builder.query({
            query: () => ({
                url: USER_URL
            }),
            providesTags: ['Users']
        }),
        postUsers: builder.mutation({
            query: (data) => ({
                url: USER_URL,
                method: 'POST',
                body: data
            }),
        }),
        deleteFeedback: builder.mutation({
            query: (id) => ({
                url: FEEDBACK_URL + `/${id}`,
                method: 'DELETE'
            }),
        }),
        deleteAppointment: builder.mutation({
            query: (id) => ({
                url: APPOINTMENT_URL + `/${id}`,
                method: 'DELETE'
            }),
        }),
        getPatientByEmail: builder.query({
            query: () => ({
                url: PATIENT_URL + `/byEmail`
            }),
            providesTags: ['Patient']
        }),
        postNotification: builder.mutation({
            query: (data) => ({
                url: NOTIFICATION_URL,
                method: 'POST',
                body: data
            }),
        }),
        updatePatientEnable: builder.mutation({
            query: (id) => ({
                url: PATIENT_URL + `/enable/${id}`,
                method:'PUT'
            }),
        }),
        updatePatientDisable: builder.mutation({
            query: (id) => ({
                url: PATIENT_URL + `/disable/${id}`,
                method:'PUT'
            }),
        }),
        getNotification: builder.query({
            query: () => ({
                url: NOTIFICATION_URL
            }),
            providesTags: ['Notifications']
        }),
        deleteNotification: builder.mutation({
            query: (id) => ({
                url: NOTIFICATION_URL + `/${id}`,
                method: 'DELETE'
            }),
        }),
        postToken: builder.mutation({
            query: ({id, token}) => ({
                url: PATIENT_URL + `/update/${id}`,
                method:'PUT',
                body: {token}
            }),
        }),
        checkToken: builder.mutation({
            query: (data) => ({
                url: PATIENT_URL + '/isTokenUnique',
                method: 'POST',
                body: data
            }),
        }),
        getAppointmentByDate: builder.query({
            query: () => ({
                url: APPOINTMENT_URL + "/byDate"
            }),
            providesTags: ['Appointments']
        }),
        updatePatientActive: builder.mutation({
            query: (id) => ({
                url: PATIENT_URL + `/active/${id}`,
                method:'PUT'
            }),
        }),
        updatePatientInactive: builder.mutation({
            query: (id) => ({
                url: PATIENT_URL + `/inactive/${id}`,
                method:'PUT'
            }),
        })
    })
})


export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useFeedbackMutation,
    useGetFeedbackQuery, useGetPatientQuery, useCheckEmailMutation, useCheckNumberMutation,
    usePostAppointmentMutation, useGetAppointmentQuery, useGetUsersQuery, usePostUsersMutation,
    useDeleteFeedbackMutation, useDeleteAppointmentMutation, useGetPatientByEmailQuery,
    usePostNotificationMutation, useUpdatePatientEnableMutation, useUpdatePatientDisableMutation,
    useGetNotificationQuery, useDeleteNotificationMutation, usePostTokenMutation, useCheckTokenMutation,
    useGetAppointmentByDateQuery, useUpdatePatientActiveMutation, useUpdatePatientInactiveMutation } = usersApliSlice;
