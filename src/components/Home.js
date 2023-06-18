import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts, viewProduct } from "../redux/action"
import { useNavigate } from "react-router-dom"

function Home(){
    const dispatch = useDispatch()
    dispatch(getProducts());
    const state= useSelector(state=>state)
    const navigate = useNavigate();
    function clickitem(id){
        dispatch(viewProduct(id))
        navigate("/viewproduct")
    }
    return(
        <div style={{padding:20}}>
            <h1 style={{fontSize:60,marginBottom:30,marginLeft:80}}>Shop</h1>
            <div style={{width:"100%",display:"flex",flexWrap:"wrap",columnGap:50,rowGap:50,justifyContent:"center",cursor:"pointer"}}>
                {state!==undefined && state.products.map((item,index)=>
                    <div key={index} style={{height:500,padding:20,border:"1px solid gray",borderRadius:10,width:300}} onClick={()=>clickitem(item.id)}>
                        <div style={{height:250,display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <img src={item.image} style={{with:"100%",height:"auto",maxHeight:220,maxWidth:250}}></img>
                        </div>
                        <div style={{height:100,width:"100%",overflow:"hidden",marginBottom:20}}>
                            <h3 style={{fontSize:22,margin:"auto",lineHeight:1.5}}>{item.title}</h3>
                        </div>
                        <h3>$ {item.price}</h3>
                        <p>{item.category}</p>
                    </div>)}
            </div>
        </div>
    )
}
export default Home;