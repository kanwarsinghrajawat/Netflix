import React from "react";

const NoResultFound = () => {
  return (
    <div className="h-[70vh] flex items-center justify-center">
      <div className=" h-full flex  justify-center flex-col gap-2">
        <p className="text-white text-sm">No Match Found </p>
        <div>
          <p className="text-white text-sm">Suggestions:</p>
          <ul className="text-white text-sm list-disc pl-7">
            <li>Looking for a movie or TV show?</li>
            <li>Try using a movie, TV show title, an actor or director.</li>
            <li>Try a genre, such as comedy, romance, sports or drama.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NoResultFound;
