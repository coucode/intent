import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useHistory } from "react-router-dom"
import { deleteACategory, getACategory, getAllCategories } from "../../store/category"

function CategoryDetail() {
  const dispatch = useDispatch()
  const history = useHistory()
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

  const handleDeleteClick = async (e) => {
    await dispatch(deleteACategory(id))
    await dispatch(getAllCategories())
    await history.push(`/category/all`)
  }

  return categoryLoaded && category ? (
    <div>
      <h1>Category Detail</h1>
      <button onClick={handleDeleteClick}>Delete Category</button>
      <p>
        {category.name}
        {category.headline}
        {category.description}
        {category.purpose}
        {category.isPrivate}
        {category.ownerId}
      </p>
      <img src={category.icon} alt="category"/>
    </div>
  ) : (
    <h1>Loading...</h1>
  )
}

export default CategoryDetail