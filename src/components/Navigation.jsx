import React from 'react'
import { Link } from 'react-router-dom'
import s from '../styles/header.module.sass'

const Navigation = ({links}) => {
  return (
    <div className={s.Navigation}>
        {
            links.map(link => 
                (<Link to={link.link}><p>{link.value}</p></Link>)
            )
        }
    </div>
  )
}

export default Navigation