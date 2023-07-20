import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Breadcrums from '../components/ProductsPage/Breadcrums/Breadcrums'
import Filters from '../components/ProductsPage/Filters/Filters'
export default function Products() {
  return (
    <div>
      <Navbar/>
      <Breadcrums/>
      <Filters/>
    </div>
  )
}
