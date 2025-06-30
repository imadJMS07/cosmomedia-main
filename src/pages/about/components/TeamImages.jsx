import React from "react";
import TeamImage from "./TeamImage";
import { TEAM_IMAGES } from "../constants";

const TeamImages = () => {
  return (
    <div className="flex-1 relative h-[700px] mt-20 lg:mt-0">
      {TEAM_IMAGES.map((image) => (
        <TeamImage key={image.id} {...image} styleI={image.style} />
      ))}
    </div>
  );
};

export default TeamImages;
