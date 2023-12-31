'use client';

import {motion} from 'framer-motion';
import {Tilt} from 'react-tilt';

import Image from 'next/image';
import {services} from '../lib/constants';
import {SectionWrapper} from '../lib/hoc';
import {fadeIn, textVariant} from '../lib/utils/motion';

const ServiceCard = ({index, title, icon}) => (
  <Tilt className="xs:w-[250px] w-full ">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <Image
          src={icon}
          alt="web-development"
          className="w-20 h-w-20 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2
          className={
            'text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'
          }>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        {
          "I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Next.js, and React Native. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!"
        }
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
