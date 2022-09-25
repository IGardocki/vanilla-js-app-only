const measures = {
    tablespoonsToCups: {
        set1: {
            conversion: 0.0625,
            "Tablespoon": { unit: "Tablespoon", symbol: "Tbs" },
            "Cup": { unit: "Cup", symbol: "c" }
        }

    },
    weight: {
        set1: {
            conversion: 2.2046,
            "Kilogram": { unit: "Kilogram", symbol: "kg" },
            "Pound": { unit: "Pound", symbol: "lbs" }
        },
        set2: {
            conversion: 0.035274,
            "Gram": { unit: "Gram", symbol: "g" },
            "Ounce": { unit: "Ounce", symbol: "oz" }
        }
    },

    density: {
        set1: {
            conversion: 0.001,
            "Milliliter": { unit: "Milliliter", symbol: "mL" },
            "liter": { unit: "liter", symbol: "L" }
        },
        set2: {
            conversion: 0.033814,
            "Milliliter": { unit: "Milliliter", symbol: "mL" },
            "Fluid Ounce": { unit: "Fluid Ounce", symbol: "fl oz" }
        }
    }
}

export default measures