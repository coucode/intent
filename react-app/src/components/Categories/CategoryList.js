import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { getAllCategories } from "../../store/category"
import EditCategoryFormModal from './EditCategoryModal';

function CategoryList() {
  const dispatch = useDispatch()
  // const history = useHistory()
  const allCategories = useSelector(state => state.category)
  const [loaded, setLoaded] = useState(false)

  let categoryArr;

  useEffect(() => {
    dispatch(getAllCategories())
  }, [dispatch])

  useEffect(() => {
    setLoaded(true)
  }, [categoryArr])

  if (allCategories) {
    categoryArr = Object.values(allCategories)
  }

  return loaded && categoryArr ? (
    <div>
      {categoryArr.map(category => {
        return (

          <div >
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

export default CategoryList