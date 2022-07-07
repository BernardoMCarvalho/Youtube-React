import React, { useState } from "react";

export default function Search(){
    const [search, setSearch] = useState('')

    return(
        <div style={{ margin: '10px 60px' }}>
            <input 
                type='text'
                alt='Pesquisa'
                className="Search-box"
            >

            </input>
        </div>
    )
}