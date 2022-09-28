import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getACategory } from "../../store/category"

function CategoryDetail() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const categoryObj = useSelector(state => state.category)
  const category = categoryObj[id]
  const [categoryLoaded, setCategoryLoaded] = useState(false)

  useEffect(() => {
    dispatch(getACategory(id))
  }, [dispatch,id])

  useEffect(() => {
    if (category){
      setCategoryLoaded(true)
    }
  }, [category])

  if (!category) return null

  return categoryLoaded && category ? (
    <div>
      <h1>Category Detail</h1>
      <p>
        {category.name}
        {category.headline}
        {category.description}
        {category.purpose}
        {category.private}
        {category.ownerId}
      </p>
      <img src={category.icon} alt="category"/>
    </div>
  ) : (
    <h1>Loading...</h1>
  )
}

export default CategoryDetail