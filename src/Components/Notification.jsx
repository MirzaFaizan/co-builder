import React from 'react';

export default function Notification({open, type, message}){
    return(
        <>
        {open ? (
     <div className="notification">
         {type === 'success' ? (
             <div className="alert alert-success">
             <strong>Success!</strong> {message}
           </div>
         ):null
         }
              {type === 'error' ? (
                   <div className="alert alert-danger">
                   <strong>Error!</strong> {message}
                 </div>
              ) : null }
     
      </div>
        ) : null}
        </>
    )
}