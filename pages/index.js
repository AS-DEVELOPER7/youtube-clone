import Head from "next/head";
import Router from "next/router";
import { useEffect } from "react";
import {
  useAnimeQuery,
  useChannelsQuery,
  useCodingQuery,
  useNewsQuery,
  useRecommandedQuery,
  useSeriesQuery,
} from "../app/services";
import ChannelLoading from "../components/ChannelLoading";
import Row from "../components/home/Row";
import { useStateContext } from "../context/StateContext";
export default function Home() {
  const { setChannelId, setHome } = useStateContext();
  const recommanded = useRecommandedQuery();
  // const anime = useAnimeQuery();
  // const news = useNewsQuery();
  const coding = useCodingQuery();
  const series = useSeriesQuery();
  const channels = useChannelsQuery();
  console.log(recommanded);
  const channel = (channelId) => {
    setChannelId(channelId);
    console.log(channelId);
    Router.push("/Channel");
  };
  useEffect(() => {
    setHome(true);
  }, []);
  return (
    <div className="overflow-x-hidden w-[100%]  h-full">
      <div className="title">Recommanded</div>
      <Row type={recommanded} />
      {/* <div className="title">Anime</div>
      <Row type={anime} /> */}
      {/* <div className="title">News</div>
      <Row type={news} /> */}
      <div className="title">Coding</div>
      <Row type={coding} />
      <div className="title">Series</div>
      <Row type={series} />
      <div className="title">Channels</div>
      <div className="overflow-auto">
        <div className="flex gap-6 w-max px-2 pb-8">
          {!channels.isLoading ? (
            channels?.data?.contents &&
            channels?.data?.contents?.map((data, id) => (
              <div
                className="w-[17em] gap-3 flex flex-col items-center justify-start"
                key={id}
                onClick={() => channel(data?.channel?.channelId)}
              >
                <img
                  src={data?.channel?.avatar[1]?.url}
                  className="h-[10em] rounded-full"
                />
                <div className="">{data?.channel?.title}</div>
                <div className="flex items-center justify-between text-xs">
                  <p>{data?.channel?.stats?.subscribersText}</p>
                  <p>{data?.channel?.stats?.videos}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="flex gap-6 w-max px-2 pb-8">
              <ChannelLoading />
              <ChannelLoading />
              <ChannelLoading />
              <ChannelLoading />
              <ChannelLoading />
              <ChannelLoading />
              <ChannelLoading />
              <ChannelLoading />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
