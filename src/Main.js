import React from "react";

const Main = (props) => {
    const numbers = [1,3,5];
    const subject = ["현아","남지현","전지윤","허가윤","권소현"];

    return(
        <ul>
            {numbers.map((number, idx)=>{
                return <li key={idx}>{number}</li>
            })}

            <br/>
            {subject.map((name)=>{
                return <li>{name}</li>
            })}

            <br/>
            {subject.map((name, index)=>{
                console.log({index, name});
                return <li key={index}>{name}</li>
            })}

            <br/>
            {subject.map(function(name, index){
                return <li key={index}>{name}</li>
            })}
        </ul>
    )
}
export default Main;