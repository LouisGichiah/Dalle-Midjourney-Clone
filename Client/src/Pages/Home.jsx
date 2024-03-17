import React, { useState, useEffect} from 'react'
import { InputField, Spinner, Image } from '../Components';

const RenderImages = ({ title, data }) => {
    if(data?.length > 0) {
        return data.map((post) => <Image key={post._id} {...post}/>)
        }
        return (
        <h2 className='mt-5 font-bold text-[#6449ff] text-xl uppercase'>{title}</h2> 
    )
    }

const Home = () => {
    const [Spinning, setSpinning] = useState(false);
    const [allPosts, setallPosts] =useState(null);
    const [CheckText, setCheckText] = useState('')
return (
    <section className='max-w-7xl mx-auto'>
        <div>
            <h1 className='font-extrabold text-[#222328] text-[32px]'>The Community Showcase</h1>
            <p className='mt-2 text-[#666e75] text -[18px] max-w-[500px]'>Dive into a mesmerizing array of jaw-dropping, spellbinding, and downright stunning images, each masterfully created by the innovative and groundbreaking <strong> DALL-E AI</strong></p>
        </div>
        <div className='mt-16'>
            <InputField/>
        </div>
            <div className='mt-10'>
                {Spinning ? (
                    <div className='flex justify-center items-center'>
                        <Spinner/>
                        </div>
                ): (
                    <>
                    {CheckText && (
                        <h2 className='font-medium text-[#666e75] text-xl mb-3'>
                            Showing results for <span className='text-[222328]'>{CheckText}</span>
                        </h2>
                    )}
                    <div className='grid grid-cols-1 sm:grid-cols-3 xs:grid-cols-2 lg:grid-cols-4 gap-3'>
                        {CheckText ? (
                            <RenderImages
                                data={[]}
                                title='No Results Found'
                                />
                        ) : (
                            <RenderImages
                            data={[]}
                            title='No Posts Found'
                            />
                        )}
                    </div>
                    </>
                )}
            </div>
    </section>
  )
}

export default Home