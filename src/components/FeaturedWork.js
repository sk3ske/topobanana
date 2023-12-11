'use client'

import { useState } from 'react'

import { Container } from '@/components/Container'
import Sidebar from '@/components/Sidebar'
import Gallery from '@/components/Gallery'

import properGander from '@/images/art/proper-gander.jpeg'
import aPolloMission from '@/images/art/a-pollo-mission.jpeg'
import chefalopod from '@/images/art/chefalopod.jpeg'

import burritoes from '@/images/art/burritoes.png'
import departingSole from '@/images/art/departing-sole.jpeg'
import capsize from '@/images/art/capsize.jpeg'
import piel from '@/images/art/piel.jpeg'
import pintsize from '@/images/art/pintsize.jpeg'
import taterTotter from '@/images/art/tater-totter.jpeg'

import kintsugi from '@/images/art/kintsugi.png'
import moonshine from '@/images/art/moonshine_hero.jpg'
import nomsters from '@/images/art/nomsters.jpg'
import cautionKite from '@/images/art/caution_kite.jpg'

const categories = ['all', 'paintings', 'photographs', 'art objects']
const works = [
  {
    image: chefalopod,
    title: 'Chefalopod',
    date: '2023',
    blurb: 'Acrylic on 6x6" canvas',
    tag: 'paintings',
  },
  {
    image: properGander,
    title: 'Proper Gander',
    date: '2023',
    blurb: 'Acrylic on 6x6" canvas',
    tag: 'paintings',
  },
  {
    image: aPolloMission,
    title: 'A Pollo Mission',
    date: '2023',
    blurb: 'Acrylic on 6x6" canvas',
    tag: 'paintings',
  },
  {
    image: piel,
    title: 'Piel',
    date: '2022',
    blurb: 'Two pies, teak board',
    tag: 'photographs',
  },
  {
    image: taterTotter,
    title: 'Tater Totter',
    date: '2021',
    blurb: 'Tater tots, balsa wood, steel pins',
    tag: 'photographs',
  },
  {
    image: pintsize,
    title: 'Pintsize',
    date: '2021',
    blurb: 'Pint glasses, IPA',
    tag: 'photographs',
  },
  {
    image: capsize,
    title: 'Capsize',
    date: '2021',
    blurb: 'Concrete garden gnome, bottlecaps',
    tag: 'photographs',
  },
  {
    image: departingSole,
    title: 'Departing Sole',
    date: '2021',
    blurb: 'Boots, mud',
    tag: 'photographs',
  },
  {
    image: burritoes,
    title: 'Burritoes',
    date: '2018',
    blurb: 'Toes, aluminum foil',
    tag: 'photographs',
  },
  {
    image: kintsugi,
    title: 'kintsugiPhone',
    date: '2016',
    blurb: 'iPhone 4, gold leaf',
    tag: 'art objects',
  },
  {
    image: moonshine,
    title: 'Moonshine',
    date: '2017',
    blurb: 'Hammered copper, tin cladding, cork',
    tag: 'art objects',
  },
  {
    image: cautionKite,
    title: 'Throwing Caution to the Wind',
    date: '2011',
    blurb: 'Caution tape, packing tape, string',
    tag: 'art objects',
  },
  {
    image: nomsters,
    title: 'Nomsters',
    date: '2009',
    blurb: 'A packaging design for 5 eggs',
    tag: 'art objects',
  },
]

export function FeaturedWork() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
  }

  return (
    <section className="pt-0 sm:pb-24 md:pt-16 lg:pt-8" id="work">
      <Container>
        <div className="relative mx-auto mt-0 grid max-w-xl gap-0 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Sidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
          />
          <Gallery
            works={
              selectedCategory !== 'all'
                ? works
                    .filter((work) => work.tag === selectedCategory)
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                : works.sort((a, b) => new Date(b.date) - new Date(a.date))
            }
          />
        </div>
      </Container>
    </section>
  )
}
