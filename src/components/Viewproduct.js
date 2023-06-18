import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function Viewproduct() {
    const state = useSelector(state => state)
    const navigate = useNavigate();
    return (
        <div style={{ padding: 20 }}>
            <h1 style={{ fontSize: 60, marginBottom: 30, marginLeft: 80 }}>Shop</h1>
            {
                state != undefined &&
                <div style={{ height: 500, border: "1px solid gray", borderRadius: 10, width: "100%",display:"flex"}}>
                    <div style={{width:"50%", padding:20,display: "flex", justifyContent: "center", alignItems: "center",borderRight:'1px solid gray'}}>
                        <img src={state.image} style={{ with: "80%", height: "100%",maxHeight:400}}></img>
                    </div>
                    <div style={{padding:20, width: "100%", overflow: "hidden", marginBottom: 20 }}>
                        <h3 style={{ fontSize: 30, margin: "auto", lineHeight: 1.5,fontWeight:500 }}>{state.title}</h3>
                        <div style={{backgroundColor:"green",color:"white",width:140,height:50,fontSize:20,padding:10,textAlign:"center",marginTop:20,borderRadius:10,fontWeight:500}}>${state.price}</div>
                        <div style={{backgroundColor:"lightgray",color:"brown",height:50,fontSize:20,padding:10,textAlign:"left",marginTop:20,borderRadius:4,fontWeight:500}}>{state.category}</div>
                        <p style={{marginTop:20}}>{state.description}</p>
                        <button style={{color:"white",backgroundColor:"coral",border:"none",padding:10,paddingLeft:50,paddingRight:50,borderRadius:5}}>Add to Card</button>
                    </div>
        
                </div>
            }
            <button className="btn btn-primary mt-5 col-1" onClick={()=>navigate("/")}>Back</button>

        </div>
    )
}
export default Viewproduct;