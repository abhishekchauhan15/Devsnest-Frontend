import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const url: string = "https://randomuser.me/api/";

interface Person {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

export const personApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints(builder) {
    return {
      fetchPerson: builder.query<Person[], number | void>({
        query(limit = 10) {
          return "";
        },
      }),
    };
  },
});

export const { useFetchPersonQuery } = personApiSlice;
