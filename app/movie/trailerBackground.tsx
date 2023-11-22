import { useSelector } from "react-redux";
import UseTrailer from "../components/hooks/useTrailer";

const TrailerBackground = ({ movieId }: any) => {
  UseTrailer(movieId);
  const trailerKey = useSelector(
    (store: any) => store?.movies?.trailerVedioKey
  );

  return (
    <>
      <div className="w-screen">
        <iframe
          className="w-screen aspect-video h-full"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&loop=1&playlist=${trailerKey}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </>
  );
};
export default TrailerBackground;
