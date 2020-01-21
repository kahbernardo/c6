import React from 'react'


const [estado, setEstado] = useState(0)
const[place,setPlace]=useState('Notify me')

    

const mudanca=()=>{
    if(estado=2) {
        setEstado(0)
        setPlace('Notify me')
    } elseif(estado=1){
        setPlace('Thank you')
        setEstado(estado+1)
    }
    else{
        setPlace('E-mail')
        setEstado(estado + 1)
    }


}


const BotaoMagico=()=>{
    return(
    <div estado>
        <input>
            {place}
        </input>
        <button onClick={mudanca} >
            Send
        </button>
    </div>
    )

}

export default BotaoMagico