import React, { useEffect, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import Cards from '../../components/Cards';

const Products = () => {

  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        // console.log(data)
        setProducts(data)
        setFilteredItems(data)
      } catch (error) {
        console.log("Error fetching data:", error)
      }
    }
    fetchData();
  }, [])

  // console.log(products);

  // filtering function
 

  // show all products
  

  // sorting functionality
 

 

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12'>
      <h2 className='title'>Our collections</h2>

      {/* product cards */}
      <div>
        <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8'>
          {/* all buttons */}
          <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap'>
            
            <button onClick={() => filterItems("Polo")}>Polos</button>
            <button onClick={() => filterItems("Tshirt")}>T-shirts</button>
            <button onClick={() => filterItems("Oversized")}>OverSized</button>
          </div>

          {/* sorting option */}
          <div className='flex justify-end mb-4 rounded-sm'>
            <div className='bg-black p-2'>
              <FaFilter className='text-white h-4 w-4'/>
            </div>
            <select
              id='sort'
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOption}
              className='bg-black text-white px-2 py-1 rounded-sm'>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">From Low to High</option>
              <option value="high-to-low">
From High to Low</option>
            </select>
          </div>

        </div>

        <Cards filteredItems={filteredItems} />

      </div>
    </div>
  )

}
export default Products