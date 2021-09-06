// src/components/hero.js
import React from "react"
import "../styles/style.css"

export default function Hero() {
    return (
        <div className="hero">
            <h1 className="hero-text">
                Welcome to 『ch /みなみのぶすけ』 blog!<br />
                Enjoy lots of posts.<br />
            </h1>
            <div className="hero-author">
                <img src="https://api.adorable.io/avatars/30/image.png" className="hero-author-image" alt="avatar"></img>
                <p className="hero-author-text">
                    30歳目前、生きていく男達<br />
                    こんな時代だからこそアウトドアで楽しむ！<br />
                    幼馴染、男3人の活動配信部屋！！
                </p>
            </div>
        </div>
    )
}