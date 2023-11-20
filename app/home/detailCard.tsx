import Image from "next/image";
interface DetailCardProps {
  heading: string;
  title: string;
  image: string;
  style: string;
  gifOnImage?: boolean;
}

const DetailCard: React.FC<DetailCardProps> = ({
  heading,
  title,
  image,
  style,
  gifOnImage = false,
}) => {
  return (
    <>
      <div
        className={`bg-black flex items-center justify-between px-80 py-16  max-2xl:px-36  max-xl:px-10 max-lg:flex-col max-sm:px-4 ${style}`}
      >
        <div className="flex flex-col gap-5">
          <p className="text-white text-4xl font-black">{heading}</p>
          <p className="text-white text-xl font-normal">{title}</p>
        </div>
        {!gifOnImage ? (
          <div>
            <Image alt="tv-screen" src={image} width={600} height={350}></Image>
          </div>
        ) : (
          <>
            <div className="relative">
              <Image
                alt="tv-screen"
                src={image}
                width={600}
                height={350}
                className=""
              ></Image>
              <div className="w-72 flex overflow-hidden  border border-gray-300 items-center justify-center rounded-md absolute top-56 bottom-0  bg-black right-16 gap-4  z-10">
                <div>
                  <Image
                    alt="boxShot"
                    src="/boxshot.png"
                    width={50}
                    height={20}
                  />
                </div>
                <div>
                  <p className="text-white ">Stranger Things</p>
                  <p className="text-blue-600 ">Downloading...</p>
                </div>
                <Image
                  src="/download-icon.gif"
                  alt="gif"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </>
        )}
      </div>
      <hr className="h-1 bg-black bg-opacity-60 w-full"></hr>
    </>
  );
};

export default DetailCard;
