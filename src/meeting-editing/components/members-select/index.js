import React from 'react'
import {Dropdown} from './components/dropdown'
import './style.css'


export const MembersSelect = () =>  <div className='multi-select'>
  <div className='editing-input-title'>Участники</div>
  <input className='editing-input' placeholder='Например, Тор Одинович'></input>
  <Dropdown/>
  
</div>
