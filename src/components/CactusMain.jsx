import React from 'react'
import './CactusMain.css'
import CactusDescription from './CactusDescription'
import AddItems from './AddItems'
import Cactus from './Cactus'
import Review from './Review'

const CactusMain = () => {
  return (
    <div className='cactusmain-container'>
        <Cactus/>
        <CactusDescription/>
        <Review/>
        <AddItems/>
        
    </div>
  )
}

export default CactusMain