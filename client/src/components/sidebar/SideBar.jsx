import React from 'react'
import { useDispatch } from 'react-redux'
import {
  selectCategory,
  unselectCategory
} from '../../store/reducers/selectCategoriesReducer'
import { Checkbox, FormControlLabel, FormGroup, Grid } from '@mui/material'
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
    <Grid item className="sidebar" sx={{ padding: '0px', width: '85%' }}>
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
    </Grid>
  )
}
export default Sidebar
