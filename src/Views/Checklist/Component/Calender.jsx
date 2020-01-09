import React from 'react';
import Calendar from 'react-calendar';
 
export default function Calender({date, onChange}){
    
    return (

        <Calendar
          onChange={onChange}
          value={date}
        />

    );
  
}