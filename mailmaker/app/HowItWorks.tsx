import Button from "@/components/Button";

const list = [
  {
    title: "Expanding your business",
    content: "Try out MailMaker for free to discover how simple and effective SMS & email marketing can be.",
  },
  {
    title: "Sign up for free",
    content: "Try out MailMaker for free to discover how simple and effective SMS & email marketing can be.",
  },
  {
    title: "Automate your marketing",
    content: "Try out MailMaker for free to discover how simple and effective SMS & email marketing can be.",
  },
];

const HowItWorks = () => {
  return (
    <div
      id='how-it-works'
      className='px-6 py-10 md:py-20 mt-10 text-center max-w-[1155px] mx-auto'
    >
      <h2 className='font-bold text-4xl md:text-5xl'>SMS & Email Marketing Automation Made Simple</h2>
      <p className='mt-6 mb-10 md:mb-16'>Start increasing your marketing efforts in just a few minutes.</p>
      <ol className='grid gap-y-6 md:grid-cols-3 md:gap-x-8'>
        {list.map((item, i) => (
          <li
            key={i}
            className='py-10 px-6 md:py-20 bg-white-smoke'
          >
            <span className='bg-blue-violet text-white w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-semibold'>
              0{i + 1}
            </span>
            <h3 className='font-bold my-6'>{item.title}</h3>
            <p className='opacity-70'>{item.content}</p>
          </li>
        ))}
      </ol>
      <Button
        component='link'
        href='#pricing'
        variant='primary-reverse'
        className='mt-16 block w-fit mx-auto'
      >
        Get started free
      </Button>
    </div>
  );
};

export default HowItWorks;
