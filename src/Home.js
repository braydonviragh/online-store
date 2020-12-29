import React from 'react'
import "./Home.css"
import Product from "./Product"
import background from "./images/banner.png"

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src={background}/>
            </div>
            
            <div className="home__row">
                <Product
                    id="0001"
                    title="Patagonia Nano Puff Insulated Jacket - Men's"
                    price={199.99}
                    
                    image="https://content.backcountry.com/images/items/900/PAT/PAT01I3/ROORED.jpg"/>
                    

                <Product
                    id="0002"
                    title="Rab Cirrus Flex Hooded Jacket - Men's"
                    price={179.95}
                   
                    image="https://content.backcountry.com/images/items/900/RAB/RAB00IY/INKINK.jpg"/>
                
                <Product
                    id="0003"
                    title="The North Face Arctic Down Parka - Women’s"
                    price={298.95}
                    
                    image="https://content.backcountry.com/images/items/900/TNF/TNFZA6E/MARPUR.jpg"/>

                <Product 
                id="0004"
                title="Backcountry Cottonwoods Gore-Tex Jacket - Women's"
                price={319.99}
                image="https://content.backcountry.com/images/items/900/BCC/BCC00F3/GRAGRE.jpg"/>
               
            </div>
            
            <div>
                <h1> Featured Men/Women Outerwear </h1>
            </div>
            <div className="home__row">
                <Product 
                    id="0006"
                    title="Backcountry Sherwood Full-Zip Fleece - Men's"
                    price={77.97}
                    
                    image="https://content.backcountry.com/images/items/900/BCC/BCCZ25E/BONBRO.jpg"/>
                
                
                <Product 
                    id="0007"
                    title="Backcountry Sherwood Mock Neck Pullover - Women's"
                    price={59.97}
                    image="https://content.backcountry.com/images/items/900/BCC/BCCZ25H/NEUGRA.jpg"/>
                    
                                    
                <Product 
                id="0008"
                title="Backcountry Sherwood Hooded Pullover Fleece - Men's"
                price={71.97}
                image="https://content.backcountry.com/images/items/900/BCC/BCCZ25F/ORIBLU.jpg"/>
                    

            </div>
            <div>
                <h1> Featured Accessories </h1>
            </div>
            <div className="home__row"> 
            <Product 
                id="009"
                title="Scott Pro Taper SRS Ski Pole"
                price={119.95}
                image="https://content.backcountry.com/images/items/900/SCO/SCOL165/BLA.jpg"/>
                
                <Product 
                id="0010"
                title="Gregory Targhee FT 35L Pack"
                price={219.95}
                image="https://content.backcountry.com/images/items/900/GRE/GREZ06J/SPANAV.jpg"/>
                
                <Product 
                id="0011"
                title="Skratch Labs Camelbak Podium Water Bottle"
                price={9.99}
                image="https://content.backcountry.com/images/items/900/SLB/SLBB00Y/SMO.jpg"/>
            
            <Product 
                id="0012"
                title="Scott Pro Taper SRS Ski Pole"
                price={186.99}
                image="https://content.backcountry.com/images/items/900/OAK/OAK01UN/GRINPRROJA.jpg"/>
                

                <Product 
                id="0013"
                title="Backcountry Face Mask"
                price={19.95}
                image="https://content.backcountry.com/images/items/900/BCC/BCCZ27J/MAYMOS.jpg"/>
                    

            
            </div>
            <div>
                <h1> Featured Footwear </h1>
            </div>
            <div className="home__row">
            <Product 
                id="0014"
                title="Salomon Speedcross 5 GTX Trail Running Shoe - Men's"
                price={149.95}
                image="https://content.backcountry.com/images/items/900/SAL/SAL01P4/BLASLABLNABL.jpg"/>
                    

                    <Product 
                id="0015"
                title="Sorel Madson II WP Chukka - Men's"
                price={174.95}
                image="https://content.backcountry.com/images/items/900/SRL/SRLZ1AG/SANTAN.jpg"/>
                    
                    <Product 
                id="0016"
                title="Sorel Caribou Six WP Boot - Men's"
                price={199.95}
                image="https://content.backcountry.com/images/items/900/SRL/SRLZ18W/BLABRO.jpg"/>
                    

            </div>

            <div className="home__row">
                {/*Product */}
                {/*Product */}
            </div>

        </div>
    )
}

export default Home
