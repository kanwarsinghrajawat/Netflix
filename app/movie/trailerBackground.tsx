import { useSelector } from "react-redux";
import UseTrailer from "../components/hooks/useTrailer";

const TrailerBackground = ({ movieId }: any) => {
  UseTrailer(movieId);
  const trailerKey = useSelector(
    (store: any) => store?.movies?.trailerVedioKey
  );

  return (
    <>
      <div className="w-screen max-lg:h-3/4  max-sm:h-[55vh] max-[550]:h-[45vh]  ">
        <iframe
          className="w-screen aspect-video h-full"
          src="https://www.youtube.com/embed/ADDFmfOeihU?si=L5YWzuPdTajSFMvY&controls=0&autoplay=1&mute=1&loop=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        {/* <iframe
          className="w-screen aspect-video h-full"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&loop=1&controls=0&playlist=${trailerKey}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe> */}
      </div>
    </>
  );
};
export default TrailerBackground;
