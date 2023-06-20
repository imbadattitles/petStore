import React, { memo } from 'react'

const CategoryItem = ({props}) => {
  return (
    <label key={props.item.name} className={props.s.label}>
        <input type='radio' name='category' value={props.item.value} checked={props.selectCategory === props.item.value ? true : false}
        onChange={() => props.setSelectCategory(props.item.value)}
        /> 
        <p className={props.s.categoryText}> {props.item.name} </p>
        <p className={props.s.howMany}>{props.item.amount}</p>
  </label>
  )
}

export default memo(CategoryItem)