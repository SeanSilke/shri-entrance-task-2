import React from 'react'
import './style.css'

export const Timepicker = () => <div className='time'>
    <div>
      <div className='editing-input-title'> Дата </div>
      <input className='editing-input time-input-date' value='14 декабря, 2017' />
    </div>

    <div>
      <div className='editing-input-title'>
        Начало
      </div>
      <input className='editing-input time-input-time' value='16:00' />
    </div>
    <div className='time-dash'>
      —
    </div>
    <div>
      <div className='editing-input-title'> Конец </div>
      <input className='editing-input time-input-time' value='16:30' />
    </div>
  </div>