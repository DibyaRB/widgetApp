import React, {useState,useEffect, useRef} from 'react';

const Dropdown= ({options, selected, onSelectedChange}) =>{

  

    const [open,setOpen] =useState(false);
    const ref= useRef();

    useEffect(()=>{
      document.body.addEventListener('click',(event)=>{
          //console.log(event.target);
          if(ref.current && ref.current.contains(event.target)){ //contains is a standard function that allows us to check if one dom element is contained inside another
              return;
          }
         setOpen(false);
      },{
          capture:true
      });
      
      return ()=>{
            
      };
      
    },[]);

    const renderedOptions = options.map((option)=>{


        if(option.value === selected.value){
            return null; //null in React means dont render anything
        }

        return (
            <div key={option.value} className="item" onClick={()=>onSelectedChange(option)}>
                    {option.label}
            </div>
        );
    });

    return(
        <div ref={ref} className="ui form segment">
          <div className="field">
              <label className="label">
                  Select a Color
              </label>
              <div onClick={()=>setOpen(!open)} className={`ui selection dropdown ${ open? 'visible active': ''}`}>
                <i className="dropdown icon"> </i>
                <div className="text"> {selected.label} </div>
                <div className={`menu ${ open? 'visible transition': ''}`}>
                    {renderedOptions}
                </div>
              </div>
          </div>
        </div>
    );
};

export default Dropdown;