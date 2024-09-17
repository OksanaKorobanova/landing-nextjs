'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import ArrowRight from '@/assets/arrow-right.svg';
import starImg from '@/assets/star.png';
import springImg from '@/assets/spring.png';
import { useRef } from 'react';

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className='bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip'>
      <div className='container'>
        <div className='section-heading-wrapper relative'>
          <h2 className='section-title'>Sign up for free today</h2>
          <p className='section-description mt-5'>
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <motion.img
            src={starImg.src}
            width={360}
            className='hidden md:block absolute -left-[350px] -top-[137px]'
            alt='star img'
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={springImg.src}
            width={360}
            className='hidden md:block absolute -right-[331px] -top-[19px]'
            alt='spring img'
            style={{
              translateY: translateY,
            }}
          />
        </div>
        <div className='flex gap-2 mt-10 justify-center'>
          <button className='btn btn-primary'>Get for free</button>
          <button className='btn btn-text gap-1'>
            <span>Learn more</span>
            <ArrowRight className='h-5 w-5' />
          </button>
        </div>
      </div>
    </section>
  );
};
