'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Link as ScrollLink } from 'react-scroll'
import clsx from 'clsx'

import { Container } from './Container'

import UpperRightArrow from '@/images/upper_right_arrow.svg'
import SkeskeLogo from '@/images/skeske_logo.svg'

const links = [
  // { label: 'Work', to: 'work' },
  // {
  //   label: 'Play',
  //   href: 'http://topobanana.com',
  //   target: '_blank',
  //   rel: 'noreferrer noopener',
  // },
  { label: 'about', href: '/about' },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="z-10 h-20 bg-white lg:h-24">
      <Container className="grid h-full w-full ">
        <nav className="relative z-50 flex w-full items-center justify-between text-xs lg:text-sm">
          <div className="flex shrink-0 items-center italic">
            <Link href="/" aria-label="Home">
              → artworks by Stephanie Keske
            </Link>
          </div>
          <div className="flex items-center space-x-16">
            {links.map((link) =>
              link.href ? (
                <Link
                  key={`${link.label}-desktop`}
                  href={link.href}
                  target={link.target || ''}
                  rel={link.rel || ''}
                  className={clsx(
                    'relative hover:italic',
                    pathname == link.href
                      ? 'font-semibold text-slate-900 after:opacity-100'
                      : 'font-medium text-slate-700 hover:text-slate-900 hover:after:opacity-25'
                  )}
                >
                  <span className="flex">
                    {link.label}{' '}
                    {link.target === '_blank' && (
                      <Image
                        src={UpperRightArrow}
                        alt={'upper right arrow'}
                        className="h-6 w-6 align-bottom"
                        sizes="10rem"
                      />
                    )}
                  </span>
                </Link>
              ) : (
                <ScrollLink
                  key={`${link.label}-desktop`}
                  to={link.to}
                  smooth={true}
                  duration={600}
                  className={clsx(
                    'relative duration-200 after:absolute after:-bottom-2.5 after:left-1/2 after:h-0.5 after:w-4 after:-translate-x-1/2 after:rounded-full after:bg-slate-900 after:opacity-0  after:content-[""]  hover:bg-highlighter hover:bg-highlighter',
                    pathname == link.href
                      ? 'font-semibold text-slate-900 after:opacity-100'
                      : 'font-medium text-slate-700 hover:text-slate-900 hover:after:opacity-25'
                  )}
                >
                  {link.label}
                </ScrollLink>
              )
            )}
          </div>
        </nav>
      </Container>
    </header>
  )
}
