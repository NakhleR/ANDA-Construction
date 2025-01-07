import React from 'react';
import { ImageList, ImageListItem } from '@mui/material';
import { itemData } from '../constants';

const Portfolio = () => {
    return (
        <section className="min-h-screen bg-accent p-14">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-fraunces font-bold text-accent2 mb-4">Our Portfolio</h1>
                <p className="text-lg font-avenir mb-11 text-accent2">Welcome to our portfolio. Explore our projects to learn more about what we do.</p>
                <ImageList variant="masonry" cols={3} gap={15}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <div className='flex my-11 flex-col items-start justify-start'>
                                <h1 className='font-fraunces font-semibold text-xl'>Project Title</h1>
                                <p className='font-avenir mt-4 text-md text-left'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate laudantium a quae at, consectetur nisi soluta esse sed sint expedita necessitatibus distinctio iste id numquam ducimus corrupti ipsam. Possimus, voluptatibus.</p>
                            </div>
                            <hr className="border-t-2 border-accent2 my-11" />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </section >
    );
}

export default Portfolio;
