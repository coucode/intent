import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../store/category"


function CategoryList() {
  const dispatch = useDispatch()
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
          <div key={category.id}>
            {category.name}
          </div>
        )
      })}
    </div>
  ) : (
    <h1>Loading...</h1>
  )
}

export default CategoryList