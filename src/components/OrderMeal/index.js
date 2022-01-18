import React from 'react'

const OrderMeal = (props) => {
    // console.log()
    // url is destination and route is essentially how you get there
    // match object contains info on how route matches up with URL
    // an attribute of match includes params inside of the url :
    // in this case: slug
    console.log(props.match.params.slug)

    const meals = [
        {
            category: "Sharing is Caring",
            name: "Shoestring Fries",
            price: 5,
            description: "golden fries served with rich buttermilk ranch",
            slug: "shoestring-fries"
        },
        {
            category: "Sharing is Caring",
            name: '"Everything Bagel" Deviled Eggs',
            price: 9,
            description: "Salmon bacon, everything spice, capers, pickled onion",
            slug: "everything-bagel"
        },
        {
            category: "Sharing is Caring",
            name: "Charred Carrots",
            price: 10,
            description:  "Pistachio pesto, goat cheese",
            slug: "charred-carrots"
        },
        {
            category: "It's 8 AM Somewhere",
            name: "Sourdough Pancakes",
            price: 11,
            description: "Seasonal fruit compote, praline butter",
            slug: "sourdough-pancakes"
        },
        {
            category: "It's 8 AM Somewhere",
            name: "East Coast Breakfast Sammy",
            price: 10,
            description: "Runny egg, American, S&P, hard roll",
            slug: "east-coast-breakfast-sammy"
        },
        {
            category: "It's 8 AM Somewhere",
            name: "Steak & Eggs",
            price: 27,
            description: "Grilled Flank Steak, Twice Cooked Breakfast Potatoes, Chimichurri.",
            slug: "steak&eggs"
        },
        {
            category: "Cans & Bottles",
            name: "Topo Chico Hard Seltzer",
            price: 6,
            description: "Assorted, 4.7% alcohol",
            slug: "topo-chico-hard-seltzer"
        },
        {
            category: "Cans & Bottles",
            name: "Downeast Unfiltered Craft Cider",
            price: 7,
            description: "5.1% alcohol",
            slug: "down-east-unfiltered-craft-cider"
        },
        {
            category: "Cans & Bottles",
            name: 'Odell "Myrcenary" Double IPA',
            price: 8,
            description: "9.3% alcohol",
            slug: "odell-myrcenary"
        }
    ]

    // find element in array where element.slug is equal to props.match.params.slug
    // we're doing this so we can access data of element selected for page
    
    const meal = meals.find(element => element.slug === props.match.params.slug)
     
    console.log(meal)
    
    return (
        <div>
            <p>{meal.category}</p>
            <p>{meal.name}</p>
            <p>${meal.price}</p>
            <p>{meal.description}</p>
        </div>
    )
}

export default OrderMeal
