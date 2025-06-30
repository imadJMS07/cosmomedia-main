import React from 'react';
import { TEAM_IMAGES } from '../constants';
import TeamImage from './TeamImage';

const TeamImages = () => {
  return (
    <div className="flex-1 relative h-[700px] mt-20 lg:mt-0">
      {TEAM_IMAGES.map((image) => (
        <TeamImage key={image.id} {...image} />
      ))}
    </div>
  );
};

export default TeamImages;
