import React from 'react';
import Card2 from "./Card2";
// import Cards from './Cards';
import Sdata from "./Sdata";

function Amazon(){
    return(
        <Card2
            key = {Sdata[2].id}
            imgsrc = {Sdata[2].imgsrc}
            title = {Sdata[2].title}
            link = {Sdata[2].link}
        />
    )
}

export default Amazon;