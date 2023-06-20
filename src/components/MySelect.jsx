import React from "react";

const MySelect = ({options, defaultValue, value, onChange, selectStyle, optionStyle}) => {
    return (
        <select
            className={selectStyle}
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option className={optionStyle} value=''>{defaultValue}</option>
            {options.map(option =>
                 <option className={optionStyle} key={option.value} value={option.value}>
                    {option.name}
                    </option>
            )}
        </select>
    )
}

export default MySelect