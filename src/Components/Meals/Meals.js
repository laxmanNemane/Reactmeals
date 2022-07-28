import React, { Fragment, useContext } from 'react'
import CartContext from '../../Store/CartContext'
import AvailableMeals from './AvailableMeals'
import MealsSummary from './MealsSummery'



const Meals = () => {
 
  return (
    <Fragment>
        <MealsSummary/>
        <AvailableMeals/>
    </Fragment>
  )
}

export default Meals