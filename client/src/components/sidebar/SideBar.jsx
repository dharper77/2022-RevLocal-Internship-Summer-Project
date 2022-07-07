import React from 'react'
import { useDispatch } from 'react-redux'
import {
  selectCategory,
  unselectCategory
} from '../../store/reducers/selectCategoriesReducer'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { useEffect } from 'react'
import { useState } from 'react'

const Sidebar = () => {
  const dispatch = useDispatch()
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('/api/v1/products/categories')
      .then(response => response.json())
      .then(data => setCategories(data.categories))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="sidebar">
      <FormGroup>
        {categories.map(category => (
          <FormControlLabel
            key={category}
            control={<Checkbox />}
            onClick={event =>
              event.target.checked
                ? dispatch(selectCategory(category))
                : dispatch(unselectCategory(category))
            }
            label={category}
            className="link"
          />
        ))}
      </FormGroup>
    </div>
  )
}
export default Sidebar
