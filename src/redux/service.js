import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://618fe12bf6bf450017484a87.mockapi.io/api/v1'
  }),
  tagTypes: ['Contacts'],
  endpoints: (build) => ({
    getContacts: build.query({
      query: () => '/contacts',
      providesTags: ['Contacts']
    }),
    createContact: build.mutation({
      query: contact => ({
        url: '/contacts',
        method: 'POST',
        body: contact
      }),
      invalidatesTags: ['Contacts']
    }),
    deleteContact: build.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Contacts']
    })
  })
});

export const { useGetContactsQuery, useCreateContactMutation, useDeleteContactMutation } = contactsApi;