import React,{FC} from "react";

interface HeadProps {
    title:string,
    description:string,
    keywords:string
}


const Heading:FC<HeadProps>  = ({title,description,keywords})=>{
    return(
        <>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content="A brief description of the page"/>
            <meta name="keywords" content="keyword1, keyword2, ..."/>
        </>
    )
}


export default Heading