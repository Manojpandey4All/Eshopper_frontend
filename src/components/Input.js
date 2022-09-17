export const InputButton=(props)=>{
    
    return (<>
    
    <input name={props.name} type={props.type} id="inputtag" onChange={props.press} className={props.class} placeholder={props.placeholder} style={props.style}/>
    
    </>)
}