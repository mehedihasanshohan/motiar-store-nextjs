import Image from 'next/image';
import NavLink from '../buttons/NavLink';
import { fontBangla } from '@/app/layout';


const Banner = () => {
  return (
    <div className="carousel w-full h-128">

      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <Image src="/assets/3.jpg" alt='' fill className='object-cover' />

        {/* Text Overlay */}
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center
        text-center text-white px-6">
          {/* <h2 className="text-3xl md:text-5xl font-bold mb-12">স্বাগতম মতিয়ার স্টোরে</h2>
           */}
           <h2 className="text-3xl md:text-5xl font-bold mb-4 pt-2 leading-tight
                          bg-linear-to-r from-white via-pink-500 to-gray-200
                          bg-clip-text text-transparent">
                          স্বাগতম মতিয়ার স্টোরে
          </h2>
          <p className="mb-4 text-amber-200 text-xl">সেরা দামে টাটকা ও মানসম্মত পণ্য এখন আপনার হাতের নাগালে</p>
          <button className="btn btn-primary">
            <NavLink href='/products'>
              কেনাকাটা করুন
            </NavLink>
          </button>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <Image src="/assets/6.jpg" alt=''  fill className='object-cover' />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 pt-2 leading-tight
                          bg-linear-to-r from-amber-200 via-pink-500 to-gray-200
                          bg-clip-text text-transparent">প্রতিদিন সেরা অফার</h2>
          <p className="mb-8 text-amber-200">অবিশ্বাস্য ছাড় ও আকর্ষণীয় দামে নিত্যপ্রয়োজনীয় পণ্য</p>
            <button className="btn btn-primary ">
              <NavLink href='/products'>
                  অফার দেখুন
              </NavLink>
            </button>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <Image src="/assets/8.jpg" alt=''  fill className='object-cover' />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 pt-2 leading-tight
                          bg-linear-to-r from-amber-200 via-pink-500 to-gray-200
                          bg-clip-text text-transparent">গুণগত মানের নিশ্চয়তা</h2>
          <p className="mb-8 text-amber-200">আপনার পরিবারে পৌঁছে দিন টাটকা পণ্য</p>
          <button className="btn btn-primary">অর্ডার করুন</button>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full">
        <Image src="/assets/12.jpg" alt=''  fill className='object-cover'/>
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 pt-2 leading-tight
                          bg-linear-to-r from-amber-200 via-pink-500 to-gray-200
                          bg-clip-text text-transparent">স্মার্ট কেনাকাটা করুন, জীবন হোক সহজ</h2>
          <p className="mb-8 text-amber-200">আপনার বিশ্বস্ত পাড়ার দোকান</p>
          <button className="btn btn-primary">Visit Us</button>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>

    </div>
  );
};

export default Banner;