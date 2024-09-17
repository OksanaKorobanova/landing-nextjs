'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import productImg from '@/assets/product-image.png';
import pyramidImg from '@/assets/pyramid.png';
import tubeImg from '@/assets/tube.png';
import LeafeIcon from '@/assets/leafe.svg';
import GoalIcon from '@/assets/goal.svg';
import SecureIcon from '@/assets/secure.svg';
import NotificationIcon from '@/assets/notification.svg';
import ArrowRight from '@/assets/arrow-right.svg';
import Link from 'next/link';

const additionalFeatures = [
  {
    icon: 'LeafeIcon',
    title: 'Integration ecosystem',
    text: 'Track your progress and motivate your efforts everyday.',
    link: '',
  },
  {
    icon: 'GoalIcon',
    title: 'Goal setting and tracking',
    text: 'Set and track goals with manageable task breakdowns.',
    link: '',
  },
  {
    icon: 'SecureIcon',
    title: 'Secure data encryption',
    text: 'Ensure your data is safe with top-tier encryption.',
    link: '',
  },
  {
    icon: 'NotificationIcon',
    title: 'Customizable notifications',
    text: 'Get alerts on tasks and deadlines that matter most.',
    link: '',
  },
];

const returnIcon = (icon: string) => {
  switch (icon) {
    case 'LeafeIcon':
      return <LeafeIcon />;
    case 'GoalIcon':
      return <GoalIcon />;
    case 'SecureIcon':
      return <SecureIcon />;
    case 'NotificationIcon':
      return <NotificationIcon />;
    default:
      break;
  }
};

const ProductShowcase = () => {
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
        <div className='flex flex-col md:flex-row gap-5 mt-5 items-center flex-wrap md:justify-center'>
          {additionalFeatures.map(({ icon, title, text, link }) => {
            return (
              <div key={text} className='w-[260px] py-10'>
                {returnIcon(icon)}
                <h4 className='font-bold text-lg tracking-tighter mt-2.5'>
                  {title}
                </h4>
                <p className='mt-2.5 text-[16px] leading-[23px] tracking-tight'>
                  {text}
                </p>
                <Link
                  href={link}
                  className='btn btn-text-small gap-1 text-[16px] leading-[23px]'>
                  <span>Learn more</span>
                  <ArrowRight className='w-5 h-5' />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
