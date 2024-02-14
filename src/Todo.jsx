export default function Todo({relation,isDone}){
    const style1={
        marginTop:'10px',
        border:'1px solid red'
    }

    if(isDone===true || relation==='bow'){
        return(
        <div style={style1}>
          <li>MIM: {relation}</li>
        </div>
    )
    }
    // else{
    //     return (
    //         <p>False</p>
    //     )
    // }
    return(<p>False</p>)
    
}
 