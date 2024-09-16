import productImg from '@/assets/product-image.png';
import pyramidImg from '@/assets/pyramid.png';
import tubeImg from '@/assets/tube.png';
import Image from 'next/image';

export const ProductShowcase = () => {
  return (
    <section className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip'>
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
          <Image
            src={pyramidImg}
            alt='Pyramid Img'
            height={262}
            width={262}
            className='hidden md:block absolute -right-36 -top-32'
          />
          <Image
            src={tubeImg}
            alt='Tube Img'
            height={248}
            width={262}
            className='hidden md:block absolute bottom-24 -left-36'
          />
        </div>
      </div>
    </section>
  );
};
