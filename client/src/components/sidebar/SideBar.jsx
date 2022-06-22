import React from 'react'
import { useDispatch } from 'react-redux'
import {
  selectCategory,
  unselectCategory
} from '../../store/reducers/selectCategoriesReducer'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

const Sidebar = () => {
  const dispatch = useDispatch()

  return (
    <div className="sidebar">
      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          onClick={event =>
            event.target.checked
              ? dispatch(selectCategory('electronics'))
              : dispatch(unselectCategory('electronics'))
          }
          label="Electronics"
          className="link"
        />
        <FormControlLabel
          control={<Checkbox />}
          onClick={event =>
            event.target.checked
              ? dispatch(selectCategory('jewelery'))
              : dispatch(unselectCategory('jewelery'))
          }
          label="Jewelery"
          className="link"
        />
        <FormControlLabel
          control={<Checkbox />}
          onClick={event =>
            event.target.checked
              ? dispatch(selectCategory("men's clothing"))
              : dispatch(unselectCategory("men's clothing"))
          }
          label="Men's Clothing"
          className="link"
        />
        <FormControlLabel
          control={<Checkbox />}
          onClick={event =>
            event.target.checked
              ? dispatch(selectCategory("women's clothing"))
              : dispatch(unselectCategory("women's clothing"))
          }
          label="Women's Clothing"
          className="link"
        />
      </FormGroup>
    </div>
  )
}
export default Sidebar
