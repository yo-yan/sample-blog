// src/components/header.js
import React from "react"
import { Link } from "gatsby"
import "../styles/style.css"

export default function Header() {
    return (
        <header className="header-background">
            <Link to="/" className="header-link">
                <h1>
                    『ch/みなみのぶすけ』　~STAND BY ME~
                </h1>
            </Link>
            <Link to='https://twitter.com/home?lang=ja'><button>twitter</button></Link>
            <Link to='https://www.instagram.com/'><button>instagram</button></Link>
            <Link to='https://www.youtube.com/'><button>youtube</button></Link>
            <Link to='https://www.tiktok.com/foryou?lang=ja-JP'><button>tiktok</button></Link>
        </header>
    );
}