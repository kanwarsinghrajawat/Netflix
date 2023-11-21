import { useSelector } from "react-redux";
import UseTrailer from "../components/hooks/useTrailer";

const TrailerBackground = ({ movieId }: any) => {
  UseTrailer(movieId);
  const trailerKey = useSelector(
    (store: any) => store?.movies?.trailerVedioKey
  );

  return (
    <>
      <iframe
        className="w-full aspect-video h-full"
        width="560"
        height="315"
        src={
          "https://www.youtube.com/embed/" +
          trailerKey +
          "?autoplay=1&mute=1&loop=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </>
  );
};
export default TrailerBackground;
