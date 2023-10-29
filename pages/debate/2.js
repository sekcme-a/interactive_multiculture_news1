
import { useRouter } from "next/router"
import { useState } from "react"
import styles from "src/debate/debate.module.css"
import Talk from "src/public/components/Talk"
import TypewriterComponent from "typewriter-effect"


const TalkOne = () => {
  const router = useRouter()
  const [isTalkEnd, setIsTalkEnd] = useState(false)

  return(
    <div className={styles.main_container}>
      <div className={styles.prev_container} onClick={() => router.back()}>
        <h2>{`< 이전으로`}</h2>
      </div>
      <div className={styles.next_container} onClick={() => router.push("/debate/3")}>
        <h2>{`다음으로 >`}</h2>
      </div>

      <div className={styles.img_container}>
        <img src="/images/debate/person/you.png" alt="사진"/>
      </div>
      <div className={styles.talk_container}>
        <h1>유경선 수원시다문화가족지원센터장</h1>
        <h3>
          <TypewriterComponent

            onInit={(typewriter) => {
              typewriter
              .pauseFor(300)
              .typeString(`<span style="margin: 20px"/>“먹고 살기 힘들다며 왜 노력을 더 하지 않아?” “시간이 없으면 새벽이라도 나와서 공부해야지”
              수원시다문화가족지원센터장을 하며 여러 단체와 기업체, 그리고 다양한 분들을 만나면 들어볼 수 있는 말입니다. 다문화 그리고 이주민들이 우리 사회 구성원으로 나아가기 위해 우리 문화를 이해하고 받아들이는 것은 꼭 필요합니다. 그러나 이들이 살았던 모국의 문화가 우리나라와 다르고, 그 차이를 인정하기보다 무시하는 발언을 하곤 합니다. 한국 사람들은 열심히 노력해서 대한민국이라는 국가를 성장시켰습니다. 이주민들이 대한민국의 구성원이 되기 위해 노력하는 것은 필요합니다. 다만, 이들에게 우리는 문화의 차이를 알려주며 존중 속에 노력이 지속될 수 있도록 해야 합니다.`)
              .pauseFor(300)
              .typeString(`<br/><br/><span style="margin: 20px"/>결혼이주 여성의 경우 한국 남편의 경제력만으로 가족을 부양하기 힘든 경우가 있습니다. 그럼에도 여성들이 경제권을 갖지 못하는 경우가 있는데, 이는 시댁과 남편이 경제권을 주지 않는 경우입니다. 경제권을 갖는다는 것은 가정과의 협의가 필요합니다. 협의에는 자녀 양육의 어려움이 있을 것이고 시댁과 남편의 동의도 포함됩니다. 원만한 합의가 이루어졌더라도, 한국어와 한국문화를 이해해야 합니다. 한국은 말도 빠르고 모든 일들이 빠르게 진행됩니다. 모국에서 컴퓨터를 배우지 못하는 경우도 많습니다. 빠르게 진행되는 업무 속에서 배우지 못한 과정들을 학습하며 경제활동을 한다는 것은 포기로 이어질 수 있습니다.`)
              .pauseFor(300)
              .typeString(`<br/><br/><span style="margin: 20px"/>구직하는 외국인들도 수준이 높아 일과 생활이 균형 잡힌 삶을 추구하는 경우가 많습니다. 건강한 삶을 위해서 필요한 과정입니다. 그러나 단순히 쉽고 편한 일만을 추구하는 경우도 있습니다. 기업 입장에서 함께 성실히 일하며 성장하길 바라고 채용했으나 되려 권리만 주장하는 경우, 좋은 취지는 변질되는 것입니다. 특정 국가와 문화가 아닌 인간의 성장인 측면에서 성장이란 노력이 수반되어야 합니다. 그러나 끊임없는 성장을 통해 나아가려는 모습 대신 허영과 사치를 위한 모습을 선택하는 사람들도 많이 찾아볼 수 있습니다. 기술적인 부분의 교육도 중요하지만 우리는 이러한 인간 자체로써의 성장을 할 수 있도록 교육하는 것도 정말 필요하다고 생각합니다.`)
              .pauseFor(300)
              .typeString(`<br/><br/><span style="margin: 20px"/>국가 예산을 통해 한국어교육을 진행하는 경우 이들의 참여와 흥미 위주로 프로그램을 편성하는 경우가 있습니다. 취미, 바리스타 자격증 등의 교육이 있는데, 이러한 자격은 취업이 아닌 창업을 위한 자격증으로 구분할 수 있습니다. 하지만 창업은 단순히 몇 개월 과정으로 끝나는 것이 아니기 때문에 자격증 교육에서 나아가 경영교육 등 운영과 경영 전반에 대한 교육이 필요합니다. 한국어가 어려워 단순노동으로 취업하는 것이 아닌 고소득을 받고 한국 사회에서 구성원으로 인정받기 위해선 장기간에 걸친 교육이 필요합니다. 취득한 자격증들을 갖고 가치를 재창조하고 사회에 활용할 능력을 성장시키기 위함입니다.`)
              .pauseFor(300)
              .typeString(`<br/><br/><span style="margin: 20px"/>토론을 하며 다문화 경제적 자립 프로그램에 대한 발전 방향을 고민해보았습니다. 첫째, 지자체에서 보육 관련 돌봄 지원이 강화되어야 한다고 생각합니다. 경제활동이 자유롭기 위해서는 다문화가족들의 돌봄 서비스가 강화되어야 합니다. 아이를 데리고 일을 할 수 없기 때문입니다. 지자체가 돌봄을 나서서 연장 보육에 참여할 수 있도록 시립에서 나아가 사립유치원도 참가할 수 있으면 좋겠다고 생각합니다.`)
              .pauseFor(300)
              .typeString(`<br/><br/><span style="margin: 20px"/>둘째, 다문화 한부모 가족에 대한 지원을 강화하면 좋겠습니다. 다문화가정의 경우 이혼 별거가 많습니다. 이혼 후 한 번도 양육비를 받아보지 못했다는 응답이 무려 60.2%로 4~24세 교육비를 혼자 부담해야 합니다. 다문화 한부모의 경우 기초생활수급자로 선정되는 기준을 낮추면 어떨까 생각합니다다. 실제 다문화가족들이 기초생활수급자로 선정되기 어려운 것으로 알고 있어서 기준을 완화했으면 좋겠다고 생각합니다.`)
              .pauseFor(300)
              .typeString(`<br/><br/><span style="margin: 20px"/>셋째, 평등을 위한 교육이 필요합니다. 국제결혼 전에 이수해야 하는 교육을 더 강화했으면 좋겠다고 생각합니다. 이주하는 대상자도 교육을 받아야 합니다. 행복하고 평등한 부부 생활을 위해서 불합리한 경우 대처 방안들을 알아야 합니다. 본인이 필요할 때 도움을 받을 수 있는 센터나 유관 기관에 대한 정보도 입국 전 교육을 받아야 한다고 생각하며, 이후 5년 차 10년 차 등 중간중간 연차별 조사 및 재교육도 필요하다고 생각합니다.`)
              .pauseFor(300)
              .typeString(`<br/><br/><span style="margin: 20px"/>넷째, 고용 확대 및 고소득 취업 교육을 강화해야 합니다. 코로나 이후 단순 노무직 비율이 늘어난 반면, 결혼이민자의 취업률은 떨어졌습니다. 한 국가와 사회에서 장기적으로 거주할 경우, 즉 오래 살수록 사회적 위치나 지위가 올라야 하는데 다문화가족의 경우 그러지 못하는 경우가 많습니다. 한국 사회에서 인정받는 수준으로 나아갈 수 있도록 하거나 고소득을 위한 직업 교육, 나아가 임원까지도 올라갈 수 있는 역량 강화 교육이 필요하다고 생각합니다.`)
              .pauseFor(300)
              .typeString(`<br/><br/><span style="margin: 20px"/>마지막으로 중⋅고령층의 노후 준비도 필요합니다. 연세든 이주민들이 많아지고 있는데, 다문화 노후 준비가 중요한 관심사로 부상하고 있다고 생각합니다. 은퇴를 앞둔 이민자가 40.2%라고 합니다. 젊은 이주민들에 대한 취업 불안도 그런데 은퇴를 앞둔 이민자들의 상황도 어려울 것이라고 생각합니다. 다문화가족들이 다문화 어르신을 요양할 수 있도록 하는 프로그램이나 간호조무사, 요양보호사 등을 통한 선순환 케어를 사회복지 시스템 안에서 구축하는 것도 좋은 방법이라고 생각합다.`)
              .pauseFor(300)
              .typeString(`<br/><br/><span style="margin: 20px"/>다문화가족도 노력해야 하고, 모두가 노력해야 합니다. 누군가 해주길 바라는 것은 옳지 않습니다. 공부하고 인정받고 의무를 행하며 권리를 주장해야 합니다`)
              .start()
              .callFunction(function (state) {
                // state.elements.cursor.style.display = 'none'
              })
              
            }}
            options={{
              delay: 3
            }}
          />
        </h3>
      </div>
    </div>
  )
}

export default TalkOne