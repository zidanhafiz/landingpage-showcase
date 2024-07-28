import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className='min-h-screen max-w-5xl mx-auto text-center mt-16'>
      <h2 className='text-4xl font-bold'>Page Not Found</h2>
      <p className='my-6'>Could not find requested resource</p>
      <Button
        component='link'
        href='/'
        className='mt-8 block w-fit mx-auto'
        variant='primary-reverse'
      >
        Return Home
      </Button>
    </div>
  );
}
