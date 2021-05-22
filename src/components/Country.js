import React from 'react'

const Country = ({name, fillInputFunction}) => {
    return (
        <>
            <h1 className="dropdown-country" onClick={fillInputFunction}>{name}</h1>
        </>
    )
}

export default Country
