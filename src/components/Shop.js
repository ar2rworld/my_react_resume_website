import React, {Component} from "react"
import Product from "./Product"

class Shop extends Component{
  constructor(){
    super()
    this.state={}
  }
  render(){return(
    <div style={{border:"1px rgba(255,215,0,120) solid"}}>
    <h3 style={{textAlign:"center"}}>Shop:</h3>
    <div style={{display:"grid", gridTemplateColumns:"auto auto auto"}}>
      <Product name="PPSh" description="one of the most dangerous russian gun in WW2" url="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.deactivated-guns.co.uk%2Fimages%2Fuploads%2Fppsh41china%2F0a1a1a141pp-036951_3.jpg&f=1&nofb=1" />
      <Product name="Molotov cocktail" description="When you left with nothing and ready to die for the MotherRussia" url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.xl.thumbs.canstockphoto.com%2Fglass-bottle-filled-with-gasoline-a-so-called-molotov-cocktail-isolated-on-white-background-picture_csp24335112.jpg&f=1&nofb=1" />
      <Product name="Cigarettes" description="For breakfast, during the fight, when comrad feels bad and/or happy" url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.3k6N6pr_zcmBv7XIlAI35wHaPA%26pid%3DApi&f=1" />
      <Product name="V. Lenin" description="Our father" url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.archontology.org%2Fimages%2Fussr%2Flenin.jpg&f=1&nofb=1" />
    </div>
    </div>
  )}

}

export default Shop