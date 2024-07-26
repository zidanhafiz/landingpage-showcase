'use client'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

const list = [
  {
    name: 'Solutions',
    href: '#solutions',
  },
  {
    name: 'Features',
    href: '#features',
  },
  {
    name: 'Pricing',
    href: '#pricing',
  },
  {
    name: 'How It Works',
    href: '#how-it-works',
  },
]

const Navbar = () => {
  return (
    <nav>
      <Link href='/'>
        <Image src='/images/logo.svg' alt="MailMaker" width={100} height={100} />
      </Link>
      <div>
        <ul>
          {list.map((item, i) => (
            <li key={i}>
              <Link href={item.href}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Button
          component='link'
          variant='outline'
          href='#pricing'
        >Start Free</Button>
        <Link href='#features' className='mx-[2.5rem] my-[0.75rem] hover:text-blue-violet transition-colors font-bold'>Learn More</Link>
      </div>
    </nav>
  )
}

export default Navbar