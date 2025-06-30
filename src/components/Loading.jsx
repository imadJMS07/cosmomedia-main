import React from 'react';
import { Hourglass } from 'ldrs/react'
import 'ldrs/react/Hourglass.css'

const Loading = () => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <h2 className='cosmo-media font-bold' data-text="cosmomedia">cosmomedia</h2>
  </div>
);

export default Loading;