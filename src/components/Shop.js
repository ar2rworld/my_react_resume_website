import React, {Component} from "react"
import Product from "./Product"

class Shop extends Component{
  constructor(props){
    super()
    this.state={project:[],
    projectFetched:false}
    this.loadData = this.loadData.bind(this);
  }
  async loadData(){
    let i=0;
    let done=false;
    while(i<10){
      try {
        this.setState({project:[{key:1000, name:"Loading name", url:"https://media1.giphy.com/media/sSgvbe1m3n93G/giphy.gif?cid=790b7611552fe52e26c90b6b75e5aaa19589e7b65166ef6d&rid=giphy.gif&ct=g"}]})
        const res = await fetch('http://ec2-3-141-45-250.us-east-2.compute.amazonaws.com:8000/project/'); // fetching the data from api, before the page loaded
        const project = await res.json();
        this.setState({
          project, projectFetched:true
        });
        console.log("projects: " + project.length);
        done=true;
        i=10;
      } catch (e) {
        console.log("ERROR: " + e);
      }
      i+=1;
      console.log("i=" + i);
    }
    if(!done){
      this.setState({project:[{key:1000, name:"Failed to load"}]})
    }

  }
  async componentDidMount(){
    /*try {
      const res = await fetch('http://localhost:8000/project/'); // fetching the data from api, before the page loaded
      const project = await res.json();
      //console.log("this" + project);
      this.setState({
        project, projectFetched:true
      });
      console.log("projects: " + project.length);
    } catch (e) {
      console.log("ERROR: " + e);
    }*/
    var inter = setInterval(this.loadData(), 10000); 
    if(this.state.projectFetched) clearInterval(inter);
  }
  render(){return(
    <div style={{border:"1px rgba(255,215,0,120) solid"}}>
    <h3 style={{textAlign:"center"}}>Shop:</h3>
    <div style={{display:"grid", gridTemplateColumns:" auto auto auto"}}>
      {this.state.project?this.state.project.map(product=>{
        return(<Product key={product.id} name={product.name} price={product.price} description={product.description} url={product.url} />)
      }): <h2>Loading</h2>}
      {/*<Product name="PPSh" price="500" description="one of the most dangerous russian gun in WW2" url="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.deactivated-guns.co.uk%2Fimages%2Fuploads%2Fppsh41china%2F0a1a1a141pp-036951_3.jpg&f=1&nofb=1" />
      <Product name="Molotov cocktail" price="1" description="When you left with nothing and ready to die for the MotherRussia" url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.xl.thumbs.canstockphoto.com%2Fglass-bottle-filled-with-gasoline-a-so-called-molotov-cocktail-isolated-on-white-background-picture_csp24335112.jpg&f=1&nofb=1" />
      <Product name="Cigarettes" price="0.50" description="For breakfast, during the fight, when comrad feels bad and/or happy" url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.3k6N6pr_zcmBv7XIlAI35wHaPA%26pid%3DApi&f=1" />
      <Product name="V. Lenin's picture"  description="Our father" url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.archontology.org%2Fimages%2Fussr%2Flenin.jpg&f=1&nofb=1" />
      */}
    </div>
    </div>
  )}

}

export default Shop