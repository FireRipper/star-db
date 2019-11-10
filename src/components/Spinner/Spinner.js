import React from 'react'

import './Spinner.css'

const Spinner = () => (
    <div className="lds-css ng-scope">
        <div className="lds-double-ring">
            <div></div>
            <div></div>
        </div>
    </div>
)

export default Spinner