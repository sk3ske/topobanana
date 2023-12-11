import React, { useState } from 'react'

const Sidebar = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <div className="mt-4 text-center font-display text-lg lg:h-screen lg:text-right">
      <ul className="grid grid-cols-2 bg-white pb-4 text-sm lg:grid-cols-1 lg:text-md">
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
