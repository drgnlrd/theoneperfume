"use client";

import Image from "next/image";
import { Input, Button, Typography, Tabs, TabsHeader, Tab,  } from "@material-tailwind/react";
import { Parallax } from "react-parallax";
import Slider from "react-slick";

const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  swipe: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
  ]
};

const data = [
  {
    label: 'Men',
    value: 'men',
    description: 'Perfumes for Men'
  },
  {
    label: 'Women',
    value: 'women',
    description: 'Perfumes for Women'
  },
]

const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

function Hero() {
  return (
    <header className="bg-white">
      <Parallax blur={0} bgImage="/image/perfume_banner.jpg" className="h-[200px] md:h-[500px]" bgImageAlt="home_banner_image" strength={500} >
        {/* <div className="h-full w-full flex justify-center items-center text-white">
          <Typography variant="h1">New Arrivals</Typography>
        </div> */}
      </Parallax>
      <div className="p-5 mt-10">
        <div className="text-center mb-10" >
          <Typography variant="h3" >Perfumes</Typography>
        </div>
        <div className="flex justify-center items-center" >
          <Tabs value="men">
            <TabsHeader>
              {data.map(({ label, value }) => (
                <Tab key={value} value={value} className="px-8">
                  {label}
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
        </div>
        <Slider {...sliderSettings}>
          {Array(8).fill('prod').map((item, idx)=>(
            <div key={`item-${idx}`} className="mx-auto">
              <div className="w-fit" >
                <Image
                  height={500}
                  width={500}
                  alt="product_pic"
                  src="/image/product.png"
                  className="h-[300px] w-auto rounded-xl object-cover mb-10 border border-solid border-gray-300 shadow-xl"
                />
                {/* <a href="#" className="text-black font-sans text-base no-underline border border-solid border-black mt-4 px-3 py-2 hover:text-blue-gray-800 hover:underline" >
                  Learn More
                </a> */}
                <Typography className="text-xl mb-5 font-bold" >Product Name</Typography>
                <Button>Learn More</Button>
              </div>
            </div>
          ))}
          
        </Slider>
        
      </div>
      <Parallax bgImage="/image/parallax_banner.jpg" strength={500} className="mt-5 h-[200px]" >
        {/* <div className="min-h-[300px]" ></div> */}
      </Parallax>
      <div className="p-5 mt-10">
        <div className="text-center mb-10" >
          <Typography variant="h3" >Attars</Typography>
        </div>
        {/* <div className="flex justify-center items-center" >
          <Tabs value="men">
            <TabsHeader>
              {data.map(({ label, value }) => (
                <Tab key={value} value={value} className="px-8">
                  {label}
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
        </div> */}
        <Slider {...sliderSettings}>
          {Array(8).fill('prod').map((item, idx)=>(
            <div key={`item-${idx}`} className="mx-auto">
              <div className="w-fit" >
                <Image
                  height={500}
                  width={500}
                  alt="product_pic"
                  src="/image/product.png"
                  className="h-[300px] w-auto rounded-xl object-cover mb-10 border border-solid border-gray-300 shadow-xl"
                />
                {/* <a href="#" className="text-black font-sans text-base no-underline border border-solid border-black mt-4 px-3 py-2 hover:text-blue-gray-800 hover:underline" >
                  Learn More
                </a> */}
                <Typography className="text-xl mb-5 font-bold" >Product Name</Typography>
                <Button>Learn More</Button>
              </div>
            </div>
          ))}
          
        </Slider>
        
      </div>
      <Parallax bgImage="/image/home_banner.jpg" strength={500} className="mt-5 h-[200px] md:h-[300px]" >
        {/* <div className="min-h-[300px]" ></div> */}
      </Parallax>
    </header>
  );
}

export default Hero;
