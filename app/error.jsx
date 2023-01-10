'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}){
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className='flex justify-center items-center w-full h-screen '>
      <h4>Something went wrong!</h4>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
}
