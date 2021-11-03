import React from 'react';
import Accordion from './components/Accordion';

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
]

export default () =>{
    return (
        <div>
           
            <Accordion items={items}/>
        </div>
    );
};