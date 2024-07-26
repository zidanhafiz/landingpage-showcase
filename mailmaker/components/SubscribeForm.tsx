'use client';
import { FormEvent, useState } from 'react';
import Button from './Button'

const SubscribeForm = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    console.log(email);
    setError("");
  }

  return (
    <div>
      <form 
        className='mt-10 flex flex-col md:flex-row md:justify-center items-stretch gap-4'
        onSubmit={onSubmit}
      >
        <input
          type='email'
          placeholder='Enter your email address'
          className='border border-black px-4 py-2 md:w-full md:max-w-[400px]'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        {error && <span className='text-red-500'>{error}</span>}
        <Button
          component='button'
          variant='secondary'
          type='submit'
          className='md:w-fit'
        >
          Get Started
        </Button>
      </form>
    </div>
  )
}

export default SubscribeForm