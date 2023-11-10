'use client';

import {SectionWrapper} from '../lib/hoc';
import {technologies} from '../lib/constants';
import Image from 'next/image';

const Tech = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map(technology => (
          <div className="w-28 h-28" key={technology.name}>
            <Image src={technology.icon} alt={technology.name} />
            <p className="text-center">{technology.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'tech');
