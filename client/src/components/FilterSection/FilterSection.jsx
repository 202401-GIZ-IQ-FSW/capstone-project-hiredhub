"use client"
import React, { useState } from 'react'
import Filter from '@/components/Filter/Filter'
import filterOptions from '@/data/filterOptions.json'

const FilterSection = () => {
  const [filterValues, setFilterValues] = useState({
    lastPosted: 'all',
    salaryRange: 'all',
    jobType: 'all',
    experienceLevel: 'all',
    jobLocation: 'all'
  })

  const handleFilterChange = (name, value) => {
    setFilterValues({
      ...filterValues,
      [name]: value,
    })
  }


  return (
    <>
    <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-x-5 gap-y-5 lg:gap-16 md:gap-5">
      {filterOptions.map((item) => (
        <Filter
          key={item.name}
          name={item.name}
          label={item.label}
          options={item.options}
          value={filterValues[item.name]}
          onChange={handleFilterChange}
        />
      ))}
    </div>
      
    </>
  )
}

export default FilterSection
