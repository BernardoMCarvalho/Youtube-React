import React, { useState } from "react";

export default function MainVideoPage(){
    const [url, setUrl] = useState('https://www.youtube.com/embed/aqz-KE-bpKQ')

    return(
        <div>
            <div>MAIN VIDEO PAGE</div>
            <div className="">
                {/* <video width="320" height="240" controls>
                    <source src="https://www.youtube.com/watch?v=aqz-KE-bpKQ" type="video/mkv"/>
                    Your browser does not support the video tag.
                </video> */}
                <iframe
                    width="600" 
                    height="338"
                    title="YouTube video player" 
                    frameBorder="0"
                    src={url}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                />
                <div ClassName="Card-Selector">
                    texto
                </div>
            </div>
        </div>
    )
}