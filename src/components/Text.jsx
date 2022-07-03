function Text(props) { 
return <span className={`${props.class} text-base`}>{props.name} : {props.value} </span>
}

export default Text;