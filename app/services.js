import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const youtube = createApi({
  reducerPath: "youtube",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://youtube138.p.rapidapi.com/",
  }),
  endpoints: (builder) => ({
    // search
    autoComplete: builder.query({
      query: (value) => ({
        url: `auto-complete/`,
        method: "GET",
        params: { q: value, hl: "en", gl: "US" },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }),
    }),
    search: builder.query({
      query: (value) => ({
        url: `search/`,
        method: "GET",
        params: { q: value, hl: "en", gl: "US" },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }),
    }),
    searchPage: builder.query({
      query: (value, filter) => ({
        url: `search/`,
        method: "GET",
        params: { q: value, cursor: filter, hl: "en", gl: "US" },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }),
    }),

    // channel
    channelDetails: builder.query({
      query: (Id) => ({
        url: `channel/details/`,
        method: "GET",
        params: { id: Id, hl: "en", gl: "US" },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }),
    }),
    channelVideos: builder.query({
      query: (id) => ({
        url: `channel/videos/`,
        method: "GET",
        params: { id: id, hl: "en", gl: "US" },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }),
    }),
    channelPlaylists: builder.query({
      query: (id) => ({
        url: `channel/playlists/`,
        method: "GET",
        params: { id: id, hl: "en", gl: "US" },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }),
    }),
    channelChannels: builder.query({
      query: (id) => ({
        url: `channel/channels/`,
        method: "GET",
        params: { id: id, hl: "en", gl: "US" },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }),
    }),
    // Video
    videoDetails: builder.query({
      query: (id) => ({
        url: `video/details/`,
        method: "GET",
        params: { id: id, hl: "en", gl: "US" },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }),
    }),
    videoComments: builder.query({
      query: ({ videoId, type }) => ({
        url: `video/comments/`,
        method: "GET",
        params: { id: videoId, cursor: type, hl: "en", gl: "US" },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }),
    }),
    videoRelatedContents: builder.query({
      query: (id) => ({
        url: `video/related-contents/`,
        method: "GET",
        params: { id: id, hl: "en", gl: "US" },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }),
    }),
    videoStreamingData: builder.query({
      query: (id) => ({
        url: `video/streaming-data/`,
        method: "GET",
        params: { id: id, hl: "en", gl: "US" },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }),
    }),
    // Playlist
    playlistDetails: builder.query({
      query: () => ({
        url: `playlist/details/`,
        method: "GET",
        params: {
          id: "PLcirGkCPmbmFeQ1sm4wFciF03D_EroIfr",
          hl: "en",
          gl: "US",
        },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }),
    }),
    playlistVideos: builder.query({
      query: () => ({
        url: `playlist/videos/`,
        method: "GET",
        params: {
          id: "PLcirGkCPmbmFeQ1sm4wFciF03D_EroIfr",
          hl: "en",
          gl: "US",
        },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }),
    }),

    // Home
    Recommanded: builder.query({
      query: () => ({
        url: `search/`,
        method: "GET",
        params: {
          q: "recommanded",
          cursor: "cmVjb21tYW5kZWQmJiZFZ0lRQVElM0QlM0Q",
          hl: "en",
          gl: "US",
        },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }),
    }),
    anime: builder.query({
      query: () => ({
        url: `search/`,
        method: "GET",
        params: {
          q: "anime",
          cursor: "YW5pbWUmJiZFZ0lRQVElM0QlM0Q",
          hl: "en",
          gl: "US",
        },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }),
    }),
    news: builder.query({
      query: () => ({
        url: `search/`,
        method: "GET",
        params: {
          q: "news",
          cursor: "bmV3cyYmJkVnSVFBUSUzRCUzRA==",
          hl: "en",
          gl: "US",
        },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }),
    }),
    coding: builder.query({
      query: () => ({
        url: `search/`,
        method: "GET",
        params: {
          q: "coding",
          cursor: "Y29kaW5nJiYmRWdJUUFRJTNEJTNE",
          hl: "en",
          gl: "US",
        },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }),
    }),
    series: builder.query({
      query: () => ({
        url: `search/`,
        method: "GET",
        params: {
          q: "series",
          cursor: "c2VyaWVzJiYmRWdJUUFRJTNEJTNE",
          hl: "en",
          gl: "US",
        },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }),
    }),
    channels: builder.query({
      query: () => ({
        url: `search/`,
        method: "GET",
        params: {
          q: "channels",
          cursor: "Y2hhbm5lbHMmJiZFZ0lRQWclM0QlM0Q=",
          hl: "en",
          gl: "US",
        },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }),
    }),
  }),
});
export const {
  useSearchQuery,
  useAutoCompleteQuery,
  useChannelDetailsQuery,
  useChannelVideosQuery,
  useChannelPlaylistsQuery,
  useChannelChannelsQuery,
  useVideoDetailsQuery,
  useVideoCommentsQuery,
  useVideoRelatedContentsQuery,
  useVideoStreamingDataQuery,
  usePlaylistDetailsQuery,
  useLazyPlaylistVideosQuery,
  useRecommandedQuery,
  useAnimeQuery,
  useChannelsQuery,
  useCodingQuery,
  useNewsQuery,
  useSeriesQuery,
  useSearchPageQuery,
} = youtube;
