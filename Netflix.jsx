import React from 'react';
import Card2 from "./Card2";
// import Cards from './Cards';
import Sdata from "./Sdata";

function Netflix(){
    return(
        <Card2
            key = {Sdata[1].id}
            imgsrc = {Sdata[1].imgsrc}
            title = {Sdata[1].title}
            link = {Sdata[1].link}
        />
    )
}

export default Netflix;