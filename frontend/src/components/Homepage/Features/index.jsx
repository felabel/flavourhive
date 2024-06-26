import React from "react";
import "./style.scss";
const Features = () => {
  return (
    <>
      <div className="pd_hero pd_about" id="features">
        <h2 className="title">Features</h2>
        <p className="sub-title">What we're offering you</p>
        <div className="hero_flex">
          <div className="img_box">
            <img src="/images/left.png" />
          </div>
          <div className="text_box">
            <h4 className="feat_header">
              Discover a vast collection of recipes from around the world.
            </h4>
            <p>
              Our 300+ recipes showcases a curated list of popular and trending
              recipes, each with a title, image, and a brief description. Users
              can click on any recipe to view detailed instructions,
              ingredients, and preparation tips. Recipes are categorized by
              cuisine type and meal category for easy navigation.
            </p>
            <a href="/recipes">
              <button className="general_btn abt_btn">Discover</button>
            </a>
            <br />
          </div>
        </div>
        <div className="hero_flex">
          <div className="text_box">
            <h4 className="feat_header">
              Each recipe page provides comprehensive details
            </h4>
            <p>
              Including a high-quality image of the dish, a list of ingredients,
              step-by-step cooking instructions and tips. Users can also find
              tips, ingredients and coooking guide
            </p>
            <a href="/recipes">
              <button className="general_btn abt_btn">Discover</button>
            </a>
          </div>
          <div className="img_box">
            <img src="/images/right.png" />
          </div>
        </div>
        <div className="hero_flex">
          <div className="img_box">
            <img src="/images/final.png" />
          </div>
          <div className="text_box">
            <h4 className="feat_header">Share Recipes</h4>
            <p>
              Share your favorite recipes with friends and family effortlessly.
              Each recipe page features easy-to-use sharing options for social
              media platforms and messaging apps. Users can also copy the recipe
              link to share manually, ensuring recipients can access the recipe
              directly.
            </p>
            <a href="/recipes">
              <button className="general_btn abt_btn">Discover</button>
            </a>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
