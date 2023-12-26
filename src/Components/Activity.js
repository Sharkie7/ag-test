import React, { useState } from 'react'
import '../App.css'

const Activity = () => {

    const [tab, setTab] = useState(1);

    const handleClick = (e) => {
        const value = e.target.innerHTML;
        if (value === 'CLASS' && tab !== 1) {
            setTab(1);
        }
        else if (value === 'ID' && tab !== 2) {
            setTab(2);
        }
        else if(value === 'DIV' && tab !== 3) {
            setTab(3);
        }
    }
    return (
        <div style={{ color: 'white' }}>

            <div style={{ display: 'flex', color: 'white', cursor:'pointer' }}>
                <div className='split' style={{ textDecoration: `${tab === 1 ? 'underline' : 'none'}` }} onClick={(e) => handleClick(e)}>
                    <h1>CLASS</h1>
                </div>
                <div className='split' style={{ textDecoration: `${tab === 2 ? 'underline' : 'none'}` }} onClick={(e) => handleClick(e)}>
                    <h1>ID</h1>
                </div>
                <div className='split' style={{ textDecoration: `${tab === 3 ? 'underline' : 'none'}` }} onClick={(e) => handleClick(e)}>
                    <h1>DIV</h1>
                </div>
            </div>
            {
                tab === 1 && <div>
                    <h3>The HTML class attribute specifies one or more class names for an element. Classes are used by CSS and JavaScript to select and access specific elements. The class attribute can be used on any HTML element. The class name is case sensitive. Different HTML elements can point to the same class name.</h3>
                </div>
            }
            {
                tab === 2 && <div>
                    <h3>The id attribute specifies a unique id for an HTML element. The value of the id attribute must be unique within the HTML document. The id attribute is used to point to a specific style declaration in a style sheet. It is also used by JavaScript to access and manipulate the element with the specific id.</h3>
                </div>
            }
            {
                tab === 3 && <div>
                    <h3>
div is an HTML element that groups other elements of the page together. class is an attribute. All HTML elements can carry a class attribute. If your elements have a class attribute then you will be able to write a CSS rule to select that class. nav and container are names of classes.</h3>
                </div>
            }
        </div>

    )
}

export default Activity