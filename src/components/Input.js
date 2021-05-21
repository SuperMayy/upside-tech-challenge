import React from "react";

const Input = ({country, handleCountryInputChange}) => {
    return (
        <div className="input-zone">
            <input 
            type="text"
            value={country}
            onChange={e => handleCountryInputChange(e)}
            />
        </div>
    )
}

export default Input
