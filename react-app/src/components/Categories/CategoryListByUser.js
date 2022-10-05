import { useEffect, useState, useContext } from 'react';
import { useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';
import { getAllCategories } from "../../store/category"
import { NavContext } from "../../context/NavContext";
import './CategoryStyles/CategoryList.css'


function CategoryListByUser({ categories }) {
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false)
  const context = useContext(NavContext)
  const { categoryIdContext, setCategoryIdContext } = context

  useEffect(() => {
    dispatch(getAllCategories())
  }, [dispatch])

  useEffect(() => {
    setLoaded(true)
  }, [categories])

  function isActive(link) {
    if (categoryIdContext === link) {
      return 'active'
    } else {
      return 'inactive'
    }
  }

  return loaded && categories ? (
    <div className='category-list-outer-container'>
      {categories.map(category => {
        return (
          <div key={category.id}
            className='category-list-container'
            id={isActive(`${category.id}`)}
            onClick={(e) => setCategoryIdContext(`${category.id}`)}>
            <NavLink to={`/category/${category.id}/about`} className='category-list-navtext'>
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