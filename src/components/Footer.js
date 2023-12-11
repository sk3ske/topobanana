'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

import popperEmoji from '@/images/popper-icon.png'

export function Footer() {
  const pathname = usePathname()
  return (
    <section>
      <footer className="absolute sticky bottom-0 w-[100vw] border-t-2 border-black lg:border-none">
        <div className="my-0 flex w-auto flex-row justify-end bg-white px-2 py-4 lg:flex-row lg:px-16 lg:py-12">
          <span className="mt-8 flex flex-row text-center text-slate-900 lg:mt-0">
            © {new Date().getFullYear()} skeske
            <Image
              src={popperEmoji}
              alt={'Party popper emoji'}
              className="ml-2 h-5 w-5"
            />
          </span>
        </div>
      </footer>
    </section>
  )
}
