import Image from 'next/image'
import Link from 'next/link'

import { Container } from './Container'
import topobananaPortrait from '@/images/topobanana_portrait.png'

import { InstagramIcon, EmailIcon } from './SocialIcons'

const socialLinks = [
  {
    label: 'Instagram',
    icon: InstagramIcon,
    href: 'https://instagram.com/skedawdle',
  },
  {
    label: 'Email',
    icon: EmailIcon,
    href: 'mailto:skeske@gmail.com',
  },
]

function SocialLink({ icon: Icon, label, ...props }) {
  return (
    <Link
      className="flex items-end gap-2 bg-white px-16 text-sm font-bold text-slate-900"
      {...props}
    >
      <Icon className="mb-1 h-4 w-4" />
      {label}
    </Link>
  )
}

export function About() {
  return (
    <section>
      <Container className="relative z-10 mt-20 h-screen max-w-4xl flex-col lg:h-[calc(100vh-292px)] lg:flex-row lg:items-end">
        <div className="mx-auto bg-white">
          {/* <h4 className="mb-0 font-display text-4xl font-semibold text-slate-900 lg:text-5xl">
            about the artist
          </h4> */}
          <div className="flex max-w-prose flex-col gap-6 p-6 pb-36 text-lg text-black lg:pb-96">
            <p className="font-display leading-8">
              I invite viewers to embrace the delightful ambiguity of language
              and discover unexpected connections that lie beneath the surface
              of everyday words.
            </p>
            <p className="font-display text-xl font-bold leading-8">
              I make things that make me laugh. Sometimes they make other people
              laugh too.
            </p>
            {/* <h2>Selected exhibitions</h2>
            <p className="font-display leading-8">6x6 Show</p> */}
          </div>
        </div>

        <div className="relative col-span-1 mb-0 flex w-full items-end lg:absolute lg:bottom-0 lg:col-span-2 lg:-mb-32">
          <div className="mx-auto mb-0 flex flex-row gap-0">
            <div className="mx-auto flex flex-col items-end gap-3.5 lg:ml-12 lg:mt-8">
              {socialLinks.map((socialLink) => (
                <SocialLink
                  key={`footer-social-link-${socialLink.label}`}
                  icon={socialLink.icon}
                  label={socialLink.label}
                  href={socialLink.href}
                />
              ))}
            </div>
            <Image
              src={topobananaPortrait}
              alt=""
              className="max-w-xs"
              sizes="10vw"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
