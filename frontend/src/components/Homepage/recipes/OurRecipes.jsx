import React from 'react'
import "./index.scss"
const OurRecipes = () => {
    const recipes = [
        {
            name: "Italian Pasta",
            image: "/images/spag.png",
            desccription: "Twirl your fork into a taste of Italy with every bite of our exquisite pasta creations!",
        },
        {
            name: "French Slice",
            image: "/images/cake.png",
            desccription: "Indulge in a slice of France with each delicate, flavorful bite of our French-inspired pastry perfection!",
        },
        {
            name: "Fluffy Pancakes",
            image: "/images/pancake.png",
            desccription: "Experience breakfast bliss with our fluffy pancakes - each bite is a cloud of happiness on your plate!",
        }
    ]
  return (
    <>
        <div className="pd_recipes">
            <h2>Our Recipes</h2>
            <p className='header'>Fuel your body, delight your palate with the tasteof doofness in every recipe </p>
            <div className="img_headar">
                <img src='/images/leaf-header.png'/>
            </div>
            <div className="recipe_flex">
                {recipes.map((item) => (
                    <div className="card">
                        <div className="upper">
                            <img src={item.image} />
                        </div>
                        <div className="lower">
                            <p className='name'>{item.name}</p>
                            <p className='desc'>{item.desccription}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default OurRecipes