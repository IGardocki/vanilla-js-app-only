import React, { useState, useContext, useEffect } from "react";
import { Input } from './Input';
import { MeasurementSelection } from './MeasurementSelection';
import measures from './measures';
import { SubSelection } from './SubSelection';
import { Switch } from './Switch';


export const Widget = () => {
    const [unitA, setUnitA] = useState(measures.tablespoonsToCups.set1["Tablespoon"])
    const [unitB, setUnitB] = useState(measures.tablespoonsToCups.set1["Cup"])
    const [measurement, setMeasurement] = useState("tablespoonsToCups")
    const [input, setInput] = useState("")
    const [output, setOutput] = useState("")

    const onSubmit = (event) => {
        event.preventDefault()
        setOutput(_convert(measurement))
    }

    const _convert = (measurement) => {
        let { set1, set2 } = measures[measurement]

        return Object.keys(set1).includes(unitA.unit)
            ? _calculate(unitA.unit, set1.conversion)
            : _calculate(unitA.unit, set2.conversion)
    }

    const _calculate = (unit, conversionVal) => {
        console.log(unit, conversionVal)
        if (["Tablespoon", "Cup"].includes(unit)) {
            
            let val = unit === "Tablespoon"
                ? input * conversionVal//[0] + conversionVal[1]
                : input / conversionVal//[1]) / conversionVal[0]
            return val.toFixed(3)
        }

        let val = ["Kilogram", "Gram", "Milliliter"].includes(unit)
            ? input * conversionVal
            : input / conversionVal

        return val.toFixed(2)
    }

    return (
        <div className="container">
            <div className=" header">
                <h2 style={{ fontSize: '30px' }}> VanillaJS Unit Converter </h2>
            </div>
            <form className="pure-form" onSubmit={onSubmit}>
                <fieldset>
                    <MeasurementSelection measurement={measurement} setMeasurement={setMeasurement} unit={unitB.symbol} setUnitA={setUnitA} setUnitB={setUnitB} />

                    <Switch unitA={unitA} unitB={unitB} setUnitA={setUnitA} setUnitB={setUnitB} setOutput={setOutput} />

                    <Input unitA={unitA} unitB={unitB} input={input} output={output} setInput={setInput} />
                </fieldset>
            </form>
        </div>
    )
}