import React from 'react'
import Link from 'next/link'

function Store_Nav_Cart() {
  return (
    <Link href='/store/cart' passHref>
      <div className='absolute right-0 top-0 mr-8 mt-8 '>
        <div
          className='relative text-center bg-pink-light px-4 py-4 rounded-md font-bold text-peach text-xl leading-none cursor-pointer  transform transition-all duration-600 ease-in-out scale-100 opacity-100
hover:opacity-90 hover:scale-95'
        >
          {cart?.total_items}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-7 w-7'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2.5'
              d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
            />
          </svg>
        </div>
      </div>
    </Link>
  )
}

export default Store_Nav_Cart
