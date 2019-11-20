import React from 'react'

const RowItem = ({ left, right }) => (
    <div className="row mb-2">
        <div className="col-md-6">
            {left}
        </div>
        <div className="col-md-6 text-center text-md-left ">
            {right}
        </div>
    </div>
)

export default RowItem
