import Button from "@/components/Button";
import Image from "next/image";
import { ReactNode } from "react";

const list = [
  {
    name: "EU & California compliant",
  },
  {
    name: "Track changes",
  },
  {
    name: "Multiple fields creation",
  },
  {
    name: "Fully integrated",
  },
];

const Features = () => {
  return (
    <div
      id='features'
      className='max-w-[1155px] mx-auto px-6 mt-10 md:mt-28 py-20 space-y-48'
    >
      <Section>
        <div>
          <h2 className='font-bold text-4xl md:text-5xl'>GDPR Compliant</h2>
          <p className='my-8 opacity-70'>
            Be completely transparent and GDPR compliant with consent fields that allow your contacts to provide their consent right when they sign up.
          </p>
          <ul className='grid md:grid-cols-2 gap-y-4'>
            {list.map((item, i) => (
              <li
                key={i}
                className='flex items-center gap-4'
              >
                <Image
                  src='/images/check.svg'
                  alt='checkmark'
                  width={20}
                  height={20}
                />
                {item.name}
              </li>
            ))}
          </ul>
          <Button
            component='link'
            variant='primary-reverse'
            href='#pricing'
            className='block mt-10 w-fit'
          >
            Get started free
          </Button>
        </div>
        <div>
          <Image
            src='/images/compliant.svg'
            alt='compliant'
            width={600}
            height={600}
          />
        </div>
      </Section>
      <Section>
        <div className='md:col-start-2'>
          <h2 className='font-bold text-4xl md:text-5xl'>Have access to a robust email marketing tool.</h2>
          <p className='my-8 opacity-70'>
            Be completely transparent and GDPR compliant with consent fields that allow your contacts to provide their consent right when they sign up.
          </p>
          <Button
            component='link'
            variant='primary-reverse'
            href='#pricing'
            className='block mt-10 w-fit'
          >
            Get started free
          </Button>
        </div>
        <div className='md:col-start-1 md:row-start-1'>
          <Image
            src='/images/email.svg'
            alt='email'
            width={600}
            height={600}
          />
        </div>
      </Section>
      <Section>
        <div>
          <h2 className='font-bold text-4xl md:text-5xl'>Start conversations that get replies</h2>
          <p className='my-8 opacity-70'>
            Be completely transparent and GDPR compliant with consent fields that allow your contacts to provide their consent right when they sign up.
          </p>
          <Button
            component='link'
            variant='primary-reverse'
            href='#pricing'
            className='block mt-10 w-fit'
          >
            Get started free
          </Button>
        </div>
        <div>
          <Image
            src='/images/messages.png'
            alt='email'
            width={600}
            height={600}
          />
        </div>
      </Section>
    </div>
  );
};

const Section = ({ children }: { children: ReactNode }) => {
  return <section className='grid gap-y-16 md:grid-cols-2 md:gap-x-16 md:justify-items-center md:items-center'>{children}</section>;
};

export default Features;
