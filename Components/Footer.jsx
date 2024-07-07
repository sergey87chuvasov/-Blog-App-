import { assets } from '@/Assets/assets';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
      <Image src={assets.logo_light} alt='logo pic' width={120} />
      <p className='text-sm text-white'>
        All Right reserved. Lorem ipsum dolor sit amet.
      </p>
      <div className='flex'>
        <Image src={assets.facebook_icon} alt='icon pic' width={40} />
        <Image src={assets.twitter_icon} alt='icon pic' width={40} />
        <Image src={assets.googleplus_icon} alt='icon pic' width={40} />
      </div>
    </div>
  );
};

export default Footer;
