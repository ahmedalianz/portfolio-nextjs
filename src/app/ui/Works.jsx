'use client';

import {motion} from 'framer-motion';
import {Tilt} from 'react-tilt';

import Image from 'next/image';
import {useState} from 'react';
import {
  android,
  categories,
  ios,
  link as linkIcon,
  projects,
} from '../lib/constants';
import {SectionWrapper} from '../lib/hoc';
import {fadeIn, textVariant} from '../lib/utils/motion';

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  link,
  android_link,
  ios_link,
}) => {
  return (
    <Tilt
      options={{max: 45, scale: 1, speed: 450}}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
      <div className="relative w-full h-[230px]">
        <Image
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          {link && (
            <div
              onClick={() => window.open(link, '_blank')}
              className="bg-current w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <Image
                src={linkIcon}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          )}
          {android_link && (
            <div
              onClick={() => window.open(android_link, '_blank')}
              className="bg-current w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mx-1">
              <Image
                src={android}
                alt="android"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          )}
          {ios_link && (
            <div
              onClick={() => window.open(ios_link, '_blank')}
              className="bg-current w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mx-1">
              <Image
                src={ios}
                alt="ios"
                className="w-1/2 h-1/2 object-contain"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map(tag => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  );
};

const Works = () => {
  const [filteredWorks, setFilteredWorks] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const handleWorkFilter = item => {
    setActiveFilter(item);
    if (item === 'All') {
      setFilteredWorks(projects);
    } else {
      setFilteredWorks(projects.filter(work => work.categories.includes(item)));
    }
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={
            'sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'
          }>
          My work
        </p>
        <h2
          className={
            'text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'
          }>
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="flex justify-center items-center flex-wrap flex-row mx-0 mt-16 mb-8">
        {categories.map((item, index) => (
          <button
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`rounded-lg font-bold cursor-pointer m-2 transition-all py-2 px-4 hover:bg-secondary hover:text-white flex justify-center items-center  text-left text-xs leading-6 ${
              activeFilter === item
                ? 'bg-secondary text-white'
                : 'bg-white text-black'
            }`}>
            {item}
          </button>
        ))}
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {filteredWorks.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, 'work');
