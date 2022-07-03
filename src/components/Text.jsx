function Text({name, value, className}) { 
return <span className={`${className} text-base`}>{name} : {value} </span>
}

export default Text;