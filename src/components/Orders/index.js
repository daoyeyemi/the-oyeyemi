import React from 'react'

const Orders = () => {
    const meals = [
        {
            category: "Sharing is Caring",
            name: "Shoestring Fries",
            price: 5,
            description: "golden fries served with rich buttermilk ranch"
        },
        {
            category: "Sharing is Caring",
            name: '"Everything Bagel" Deviled Eggs',
            price: 9,
            description: "Salmon bacon, everything spice, capers, pickled onion"
        },
        {
            category: "Sharing is Caring",
            name: "Charred Carrots",
            price: 10,
            description:  "Pistachio pesto, goat cheese"
        },
        {
            category: "It's 8 AM Somewhere",
            name: "Sourdough Pancakes",
            price: 11,
            description: "Seasonal fruit compote, praline butter"
        },
        {
            category: "It's 8 AM Somewhere",
            name: "East Coast Breakfast Sammy",
            price: 10,
            description: "Runny egg, American, S&P, hard roll"
        },
        {
            category: "It's 8 AM Somewhere",
            name: "Steak & Eggs",
            price: 27,
            description: "Grilled Flank Steak, Twice Cooked Breakfast Potatoes, Chimichurri."
        },
        {
            category: "Cans & Bottles",
            name: "Topo Chico Hard Seltzer",
            price: 6,
            description: "Assorted, 4.7% alcohol"
        },
        {
            category: "Cans & Bottles",
            name: "Downeast Unfiltered Craft Cider",
            price: 7,
            description: "5.1% alcohol"
        },
        {
            category: "Cans & Bottles",
            name: 'Odell "Myrcenary" Double IPA',
            price: 8,
            description: "9.3% alcohol"
        }
    ]
    
    return (
        <>
            {meals.map((meal, index) => {
                return (
                    <div key={index}>
                        <p>{meal.name}</p>
                        <p>{meal.price}</p>
                        <p>{meal.description}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Orders
