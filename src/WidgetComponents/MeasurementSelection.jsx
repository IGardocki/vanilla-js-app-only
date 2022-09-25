import React, { useState } from 'react';
import { SubSelection } from './SubSelection';
import measures from './measures';

export const MeasurementSelection = ({ measurement, setMeasurement, unit, setUnitA, setUnitB }) => {
    
    const onSelectChange = (value) => {
        changeUnit(value)
        setMeasurement(value)
    }

    const changeUnit = (value) => {
        let { tablespoonsToCups, weight, density } = measures
        value = value === "weight" ? "lbs" : value
        value = value === "density" ? "L" : value

        switch (value) {
            case "tablespoonsToCups":
                setUnitA(tablespoonsToCups.set1["Tablespoon"])
                setUnitB(tablespoonsToCups.set1["Cup"])
                break
            case "lbs":
                setUnitA(weight.set1["Kilogram"])
                setUnitB(weight.set1["Pound"])
                break
            case "oz":
                setUnitA(weight.set2["Gram"])
                setUnitB(weight.set2["Ounce"])
                break
            case "L":
                setUnitA(density.set1["Milliliter"])
                setUnitB(density.set1["liter"])
                break
            case "fl oz":
                setUnitA(density.set2["Milliliter"])
                setUnitB(density.set2["Fluid Ounce"])
                break
            default:
                break
        }
    }

    return (
        <div>
            <label htmlFor="measurements">Measurements: </label>
            <select name="measurements" id="measurements" onChange={({ target }) => onSelectChange(target.value)}>
                <option value="tablespoonsToCups">Tablespoons To Cups </option>
                <option value="weight">Weight</option>
                <option value="density">Volume</option>
            </select>

            {["weight", "density"].includes(measurement)
                ? <SubSelection measurement={measurement} changeUnit={changeUnit} unit={unit} />
                : null
            }
        </div>
    )
}



