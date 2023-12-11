import React, { useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'

const Gallery = ({ works }) => {
  let [isOpen, setIsOpen] = useState(false)
  let [selectedWork, setSelectedWork] = useState({})

  const DetailOverlay = () => {
    return (
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-white/90" aria-hidden="true" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="rounded-xs w-full max-w-2xl transform overflow-hidden bg-white p-6 text-left align-middle">
            <div className="mb-6">
              <Image
                src={selectedWork.image}
                alt={selectedWork.title}
                className=""
                sizes="50vw"
              />
              <p className="mt-4 text-lg">
                {selectedWork.title}, {selectedWork.date}
              </p>
              <p className="text-sm">
                <i>{selectedWork.blurb}</i>
              </p>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    )
  }

  return (
    <div className="lg:col-span-4">
      <div className=" grid grid-cols-1 gap-10 bg-white p-8 lg:grid-cols-2 xl:grid-cols-3">
        {works.map((work, index) => (
          <div
            key={index}
            onClick={() => {
              setIsOpen(true)
              setSelectedWork(work)
            }}
            className="aspect-square group relative"
          >
            <Image
              src={work.image}
              alt={work.title}
              className=""
              sizes="20vw"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-0 bg-opacity-0 text-black opacity-0 group-hover:bg-opacity-80 group-hover:opacity-100">
              <p className="absolute bottom-0 right-2 m-3 text-lg">
                {work.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      <DetailOverlay />
    </div>
  )
}

export default Gallery
