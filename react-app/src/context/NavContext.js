import { createContext, useState } from 'react';

export const NavContext = createContext()

export const NavContextProvider = props => {
  const [categoryIdContext, setCategoryIdContext] = useState(null)

  const vals = {
    categoryIdContext, setCategoryIdContext
  }

  return (
    <NavContext.Provider value={{...vals}}>
      {props.children}
    </NavContext.Provider>
  )
}