import React from 'react';

export const SubSelection = ({ measurement, changeUnit, unit }) => {
    let weights = {
        name: "weights",
        values: ["lbs", "oz"],
        labels: ["kg - lbs", "g - oz"]
    }

    let densities = {
        name: "densities",
        values: ["L", "fl oz"],
        labels: ["mL - L", "mL - fl oz"]
    }

    const SelectForm = ({ name, values, labels }) => (
        <select name={name} value={unit} onChange={({ target }) => changeUnit(target.value)}>
            <option value={values[0]}>{labels[0]}</option>
            <option value={values[1]}>{labels[1]}</option>
        </select>
    )

    return measurement === "weight"
        ? SelectForm(weights)
        : SelectForm(densities)
}