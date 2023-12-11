import Image from 'next/image'
import Link from 'next/link'

import { Container } from './Container'
import topobananaPortrait from '@/images/topobanana_portrait.png'

import { InstagramIcon, EmailIcon } from './SocialIcons'

const socialLinks = [
  {
    label: 'Instagram',
    icon: InstagramIcon,
    href: 'https://instagram.com/topobanana',
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
      <Container className="relative z-10 mt-6 max-w-4xl flex-col overflow-hidden lg:mt-20 lg:h-[calc(100vh-292px)] lg:flex-row lg:items-end lg:overflow-visible">
        <div className="mx-auto bg-white">
          {/* <h4 className="mb-0 font-display text-4xl font-semibold text-slate-900 lg:text-5xl">
            about the artist
          </h4> */}
          <div className="flex max-w-prose flex-col gap-6 p-6 pb-36 text-md text-black lg:pb-96 lg:text-lg">
            <p className="font-display leading-8">
              I invite viewers to embrace the delightful ambiguity of language
              and discover unexpected connections that lie beneath the surface
              of everyday words.
            </p>
            <p className="text-kg font-display font-bold leading-8 lg:text-xl">
              I make things that make me laugh. Sometimes they make other people
              laugh too.
            </p>
            {/* <h2>Selected exhibitions</h2>
            <p className="font-display leading-8">6x6 Show</p> */}
          </div>
        </div>

        <div className="relative col-span-1 mb-0 flex w-full items-end lg:absolute lg:bottom-0 lg:col-span-2 lg:-mb-32">
          <div className="mx-auto mb-0 flex flex-row gap-0 ">
            <div className="mx-auto flex flex-col items-end gap-3 lg:ml-12 lg:mt-8">
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
              alt="A blurry, ambiguous photo of a person"
              className="max-w-xs"
              sizes="30vw,10vw"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
