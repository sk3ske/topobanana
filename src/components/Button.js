import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primaryClassName:
    'mt-12 flex items-center justify-center gap-2.5 rounded-full border border-slate-900 px-8 py-2.5 text-sm text-slate-900 duration-200 ease-in-out hover:bg-highlighter lg:gap-2 xl:gap-2.5',
  secondaryClassName:
    'mt-12 flex items-center justify-center gap-2.5 rounded-full px-8 py-2.5 text-sm text-slate-900 duration-200 ease-in-out hover:bg-highlighter lg:gap-2 xl:gap-2.5',
  primaryOnDarkClassName: 'bg-white hover:bg-sky-50 text-slate-700',
}

export function Button({ variant = 'primary', className, href, ...props }) {
  className = clsx(
    'inline-flex items-center rounded-full gap-2.5 justify-center px-7 py-3 text-md font-semibold leading-none outline-offset-2 transition-all duration-200 ease-in-out active:transition-none',
    variantStyles[`${variant}ClassName`],
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
