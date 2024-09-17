'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import productImg from '@/assets/product-image.png';
import pyramidImg from '@/assets/pyramid.png';
import tubeImg from '@/assets/tube.png';

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip'>
      <div className='container'>
        <div className='section-heading-wrapper'>
          <div className='flex justify-center'>
            <div className='tag'>Boost your productivity</div>
          </div>

          <h2 className='section-title mt-5'>
            A more effective way to track progress
          </h2>
          <p className='section-description mt-5'>
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
        </div>
        <div className='relative'>
          <Image src={productImg} alt='Product Img' className='mt-10' />
          <motion.img
            src={pyramidImg.src}
            alt='Pyramid Img'
            height={262}
            width={262}
            className='hidden md:block absolute -right-36 -top-32'
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={tubeImg.src}
            alt='Tube Img'
            height={248}
            width={248}
            className='hidden md:block absolute bottom-24 -left-36'
            style={{
              translateY: translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
