import React from "react";

const Biography=({imageUrl})=>{
    return (
        <div className="container biography">
         <div className="banner">
            <img src={imageUrl} alt="aboutImg"/>
         </div>
         <div className="banner">
            <p>Biography</p>
            <h3>Who We Are</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            blanditiis sequi aperiam. Debitis fugiat harum ex maxime illo
            consequatur mollitia voluptatem omnis nihil nesciunt beatae esse
            ipsam, sapiente totam aspernatur porro ducimus aperiam nisi. Ex
            magnam voluptatum consectetur reprehenderit fugiat recusandae aut
            similique illum natus velit, praesentium nostrum nesciunt. Deleniti,
            nesciunt laboriosam totam iusto!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            assumenda exercitationem accusamus sit repellendus quo optio dolorum
            corporis corrupti.</p>
            <p> Quas similique vel minima veniam tenetur
            obcaecati atque magni suscipit laboriosam! Veniam vitae minus nihil
            cupiditate natus provident. Ex illum quasi pariatur odit nisi
            voluptas illo qui ipsum mollitia. Libero, assumenda?</p>
         </div>
        </div>
    )
};

export default Biography;