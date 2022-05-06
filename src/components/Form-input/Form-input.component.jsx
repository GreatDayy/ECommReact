import React from 'react'
import './Form-input.styles.scss'
function FormInput({label, ...otherProps}) {
  return (
    <div className='group'>
       {label && (
         <div>
             <input className="form-input" {...otherProps}/>
              <label className={`${otherProps.value.length ? 'shrink': ''} form-input-label`}>
                  {label}
              </label>
           
         </div>
        
       )}
         
    </div>
  )
}

export default FormInput;