import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';
import { getAllCategories } from "../../store/category"
import './CategoryStyles/CategoryList.css'

function CategoryListByUser({ categories }) {
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false)


  useEffect(() => {
    dispatch(getAllCategories())
  }, [dispatch])

  useEffect(() => {
    setLoaded(true)
  }, [categories])

  return loaded && categories ? (
    <div>
      {categories.map(category => {
        return (
          <div className='category-list-container'>
            <NavLink to={`/category/${category.id}`} className='category-list-navtext'>
            <img src={category.icon} alt="category icon" className='category-list-icon' />
              <p className='category-list-text'>
                {category.name}
              </p>
            </NavLink>
          </div>
        )
      })}
    </div>
  ) : (
    <h1>Loading...</h1>
  )
}

export default CategoryListByUser