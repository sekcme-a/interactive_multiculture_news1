import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Wrapper from "src/public/components/Wrapper"

import TypewriterComponent from "typewriter-effect"


const Letsgo = () => {
  const router = useRouter()
  const [isHide, setIsHide] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setIsHide(false)
    },2500)
  },[])
  return(
    <Wrapper>
      <div style={{width:"100vw", height:"100vh", backgroundColor:"white", display:"flex", justifyContent:"center", alignItems:"center", cursor:"pointer"}} onClick={()=>router.push("/interview/1")}>
        <h1 style={{fontSize: "50px", whiteSpace:"pre-line", textAlign:'center', lineHeight:1.5, fontWeight:"bold"}}>
        <TypewriterComponent
          onInit={(typewriter) => {
            typewriter
            .pauseFor(300)
            .typeString('두 친구가 되어')
            .pauseFor(50)
            .typeString('<br/>한국으로 떠나볼까요?')
            .start()
            .callFunction(function (state) {
              // state.elements.cursor.style.display = 'none'
            })
            
          }}
          options={{
            delay: 50
          }}
          
        />
        </h1>
        {!isHide && <p style={{position:"absolute", bottom:"50px", width:"100vw", textAlign:"center" }}>아무 곳이나 클릭하세요.</p>}
      </div>
    </Wrapper>
  )
}

export default Letsgo