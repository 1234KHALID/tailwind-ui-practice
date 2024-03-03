'use client'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'

const TwoColumnForm = () => {
  return (
    <form>
      <div className="space-y-12">
        <div className="flex items-start gap-x-8 border-b border-gray-900/10 pb-12">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be display publicly so be careful what you share.
            </p>
          </div>

          <div className='bg-white border border-gray-900/10 rounded-lg p-8'>
            <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="website" className="block text-sm font-medium leading-6 text-gray-900">
                  Website
                </label>
                <div className="mt-2">
                  <div className="focus-within:ring-indgo-600 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 sm:max-w-md">
                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                      http://www.example.com
                    </span>
                    <input
                      type="text"
                      name="website"
                      id="website"
                      autoComplete="website"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-none placeholder:text-gray-400 focus:ring-0 sm:text-sm  sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-10'>
              <div className="col-span-full">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  About
                </label>
              </div>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
            </div>

            <div className='mt-10'>
              <div className='col-span-full'>
                <label htmlFor='photo' className='block text-sm font-medium leading-6 text-gray-900'>
                  Photo
                </label>
                <div className='mt-2 flex items-center gap-x-3'>
                  <UserCircleIcon className='h-12 w-12 text-gray-300' aria-hidden='true' />
                  <button
                    type='button'
                    className='rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>

            <div className='mt-5'>
              <div className='col-span-full'>
                <label htmlFor='cover-photo' className='block text-sm font-medium leading-6 text-gray-900'>
                  Cover photo
                </label>
                <div className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
                  <div className='text-center'>
                    <PhotoIcon className='mx-auto h-12  w-12 text-gray-300' aria-hidden="true" />
                    <div className='mt-4 flex text-sm leading-6 text-gray-600'>
                      <label
                        htmlFor='file-upload'
                        className='relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500'
                      >
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className='text-xs leading-5 text-gray-600'>
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-x-8 border-b border-gray-900/10 pb-12 sm:flex-col w-full mt-4">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>
          </div>
          <div className='bg-white border border-gray-900/10 rounded-lg p-8 w-[60%]'>
            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='sm:col-span-3'>
                <label htmlFor="first-name" className='block text-sm font-medium leading-6 text-gray-900'>
                  First name
                </label>
                <div className='mt-2'>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div className='sm:col-span-3'>
                <label htmlFor="last-name" className='block text-sm font-medium leading-6 text-gray-900 '>
                  Last name
                </label>
                <div className='mt-2'>
                  <input
                    type="text"
                    name='last-name'
                    id='last-name'
                    autoComplete='family-name'
                    className='bloc w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </form>
  )
}

export default TwoColumnForm
