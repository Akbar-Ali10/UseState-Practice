import React from "react";
import { useState } from "react";

function Header() {

    const [count, setcount] = useState(0);

    const OneAdd = () => setcount(count + 1);
    const OneMinas = () => setcount(count - 1);

    return (
        <>
            <div className="container">
                <h1>Simple Button</h1>
                <h2>{count}</h2>
                <div className="buttons">
                    <button onClick={OneAdd}>OneAdd</button>
                    <button onClick={OneMinas}>OneMinas</button>
                </div>
            </div>
        </>
    )

}

export default Header;




