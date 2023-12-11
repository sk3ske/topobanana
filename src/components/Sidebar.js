import React, { useState } from 'react'

const Sidebar = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <div className="mt-4 h-screen text-right font-display text-lg">
      <ul className="bg-white pb-4">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onCategorySelect(category)}
            className="mr-6 cursor-pointer rounded p-2 hover:italic"
          >
            {selectedCategory === category ? <b>{category}</b> : category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
