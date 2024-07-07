import { blog_data } from '@/Assets/assets';
import Image from 'next/image';
import BlogItem from './BlogItem';

const BlogList = () => {
  return (
    <div className=''>
      <div className='flex justify-center gap-6 my-10'>
        <button className='bg-black text-white py-1 px-4 rounded-sm'>
          All
        </button>
        <button>Technology</button>
        <button>Startup</button>
        <button>LifeStyle</button>
      </div>
      <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
        {blog_data.map((item, index) => {
          return (
            <BlogItem
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
