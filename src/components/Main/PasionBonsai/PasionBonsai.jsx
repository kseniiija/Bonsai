import React from 'react'
import "./PasionBonsai.css"

export default function PasionBonsai() {
    return (
        <div className="PasionBonsai">

            <div className="card">
                <img src="images/vector.svg" alt="Vector" />
                <h3>Tree selection</h3>
                <p>Great Bonsai starts with Great material,
                    <br />
                    "Tree,". It can be found in nature (yamadori)
                    <br />
                    or in any plant shop. It takes
                    <br /> a keen eye and experience to
                    <br />
                    choose the right one.</p>
            </div>

            <div className="card">
                <img src="images/vector2.svg" alt="vector" />
                <h3>Branches selection & Shaping</h3>
                <p>One of the most important parts,
                    <br />
                    if not the most critical factor
                    <br />
                    when making a bonsai is branches
                    <br />
                    selection and shaping.</p>
            </div>

            <div className="card">
                <img src="images/vector3.svg" alt="Vector" />
                <h3>Repotting & Roots selection</h3>
                <p>Its the deal-breaker for a bonsai,
                    <br/>
                    whether it survives or no.</p>
            </div>

            <div className="card">
                <img src="images/vector4.svg" alt="vector" />
                <h3>Wiring</h3>
                <p>A personal favorite of mine,
                    <br />
                    the differentiator between an artist and
                    <br />
                    someone just using scissors to cut some branches.a</p>
            </div>

        </div>
    )
}
