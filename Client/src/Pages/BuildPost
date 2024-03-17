import React, { useState } from 'react'
import { Preview } from '../assets';
import { InputField, Spinner } from '../Components';
import { getRandomPrompt } from '../Utils';
import { useNavigate } from 'react-router-dom'

const BuildPost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });
const [generatingImage, setgeneratingImage] = useState(false);
const [Spinning, setSpinning] = useState(false);
const handleSubmit = () => {

}
const generateImage = () => {

}
const handleTransformation = (e) => {
  setForm({...form, [e.target.name]: e.target.value})
}
const handleSupriseMe = () => {
  const randomPrompt = getRandomPrompt(form.prompt)
  setForm({...form, prompt: randomPrompt})
}
  return (
    <section className='max-w-7xl mx-auto'>
      <div>
            <h1 className='font-extrabold text-[#222328] text-[32px]'>Build</h1>
            <p className='mt-2 text-[#666e75] text -[18px] max-w-[500px]'>Build mesmerizing array of jaw-dropping, spellbinding, and downright stunning images through <strong> DALL-E AI</strong> and share them with the community</p>
        </div>
        <form className='mt-16 max-w-3xl onSubmit={handleSubmit}'>
          <div className='flex-col flex gap-5'>
            <InputField
            labelName='Your name'
            type='text'
            name='name'
            placeholder='Enter your name here'
            value={form.name}
            handleTransformation={handleTransformation}
            />
            <InputField
            labelName='Prompt'
            type='text'
            name='prompt'
            placeholder='an astronaut lounging in a tropical resort in space, vaporwave'
            value={form.prompt}
            handleTransformation={handleTransformation}
            isSupriseMe
            handleSupriseMe={handleSupriseMe}
            />
            <div className='relative border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:ring-blue-500 rounded-lg items-center focus:border-blue-500 w-63 p-3 h-65 flex justify-center'>
              {form.photo ? (
                <img
                className='object-contain h-full w-full'
                alt={form.prompt}
                src={form.photo}
                />
              ): (
                <img
                className='h-9/12 object-contain opacity-40 w-9/12'
                alt='Preview'
                src={Preview}
                />
              )}
                  {generatingImage && (
                    <div className='inset-0 flex absolute z-0 justify-center bg-[rgba(0,0,0,0.4)] items-center'>
                      <Spinner/>
                    </div>
                  )}

            </div>
          </div>
                    <div className='flex gap-5 mt-5'>
                      <button
                        className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
                        onClick={generateImage}
                        type='button'
                      >
                          {generatingImage ? 'Building...' : 'Build'}
                      </button>
                    </div>
                      <div className='mt-10'>
                        <p className='text-black text-[15px] mt-2'> Once you have built the desired image, you can share it with others in the community</p>
                          <button
                          className='=text-white mt-3 bg-[#6469ff] rounded-md font-medium w-full text-sm sm:w-auto px-5 py-3 text-center'
                          type="submit"
                          >
                        {Spinning ? 'Sharing...' : 'Share with the community'}
                          </button>
                      </div>
        </form>
    </section>
  )
}

export default BuildPost