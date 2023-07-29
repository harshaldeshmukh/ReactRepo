import React from 'react';
import PropTypes from 'prop-types';


export default function Navbar(props) {
  return (
    <nav>

        <div>
           {/* props example */}
            <a>{props.title}</a>
            <a>       </a>
            <a>{props.about}</a>
        </div>
    </nav>
  );
}

//Default Props example
Navbar.defaultProps = {
    title : "Title here",
    about : "About here "
}
