import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { getAllCategories } from "../../store/category"
import EditCategoryFormModal from './EditCategoryModal';
import './CategoryStyles/CategoryList.css'

function CategoryListByUser({categories}) {
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
          <div >
            <img src={category.icon} alt="category icon"/>
            <NavLink to={`/category/${category.id}`} >
              {category.name}
            </NavLink>
            <EditCategoryFormModal category={category} />
          </div>
        )
      })}
    </div>
  ) : (
    <h1>Loading...</h1>
  )
}

export default CategoryListByUser