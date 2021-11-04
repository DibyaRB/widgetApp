import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items=[
    {
        title:'What is React?',
        content: 'React is a front end JS Framework'
    },
    {
        title: 'Why use React?',
        content:'React is a favorite JS Library among Engineers'
    },
    {   
        title:'How do you use React?',
        content:'You use React by creating Components'

    }
];

const options=[
    {
        label: 'The color red',
        value:'red'
    },
    {
        label: 'The color Green',
        value:'green'
    },
    {
        label: 'The color Blue',
        value:'blue'
    }
];

export default () =>{

    const [selected,setSelected] =useState(options[0]);

    const [showDropdown,setshowDropdown]= useState(true);

    return (
        <div>

            <button onClick={()=>{
                setshowDropdown(!showDropdown)
            }}>

                Toggle Dropdown
                </button>
           
        {/* <Search /> */}

        {showDropdown ?
            
                 <Dropdown options={options} selected={selected} onSelectedChange={setSelected} /> : null
            
       
        }
        </div>
    );
};