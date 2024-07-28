"use client";
import Button from "@/components/Button";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html>
      <body>
        <div className='min-h-screen max-w-5xl mx-auto text-center mt-16'>
          <h2 className='text-4xl font-bold'>Something went wrong!</h2>
          <Button
            component='button'
            className='mt-8 block w-fit mx-auto'
            variant='primary-reverse'
            onClick={() => reset()}
          >
            Try Again
          </Button>
        </div>
      </body>
    </html>
  );
}
