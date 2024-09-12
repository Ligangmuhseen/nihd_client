import React from "react";
import Topbar from "./Topbar";
import Header from "./Header";
import FooterComponent from "./FooterComponent";

const MwenzaUbia = () => {
  return (
    <>
      <Topbar />
      <Header />
      <main id="main" style={{ paddingTop: "80px" }}>
        <section id="partnership" className="services" style={{}}>
          <div className="container">
            <div className="section-title">
              <h2>Kwa nini uchague NIHD kuwa mweza wa biashara?</h2>
              <p>
                Kampuni ya NIHD imebaini katika jamii kuwa kunaongezeko kubwa la
                uhitaji wa bidhaa za kampuni.
              </p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div
                  style={{
                    wordSpacing: "10px",
                    lineHeight: "1.5",
                    textAlign: "justify",
                    textJustify: "inter-word",
                  }}
                >
                  <ul className="list-group list-group-flush">
                    <span>
                      <h5>1. Kuteuliwa na kuwa Wakala wa kampuni;</h5>
                      Fursa ya kuteuliwa itakuza mapato yako kutokana na pato la
                      faida la bidhaa za kampuni na wingi wa wateja kibiashara.
                    </span>
                    <br />
                    <span>
                      <h5>2. Ukosefu wa ushindani katika soko.</h5>
                      Dawa za mfumo wa PHVs ni dawa za kisasa zinazoboresha afya
                      ya jamii kwa ubora uliothibitishwa na watumiaji. Ni dawa
                      ambazo ni suluhu la magonjwa mengi na sugu Duniani. Wahi
                      mapema kuwa mwenza wa biashara na kampuni ili kuwa wa
                      kwanza katika eneo lako na kupata fursa ya kipekee ya
                      kushika soko bila ya mwingiliano kwani bidhaa za kampuni
                      zinazalishwa na kusambazwa kwa utaratibu maalum ambao
                      unalinda maslahi ya mshirika wetu.
                    </span>
                    <br />
                    <span>
                      <h5>3. Kuaminika</h5>
                      Hakuna ulaghai wa aina yoyote utakao ruhusiwa katika
                      bidhaa za Kampuni. Kampuni imeweka sheria kali za kulinda
                      haki za biashara za washirika, Sheria hizi zitasomwa baada
                      ya kukubali kujiunga na timu, Mtu ama kampuni italazimika
                      kusoma na kukubali na iwapo ikibainika mtu kaghushi
                      atalipa fidia ya gharama kubwa ama kushitakiwa kulingana
                      na majibu sheria.
                    </span>
                    <br />
                    <span>
                      <h5>
                        4. Ukaguzi wa uendeshaji wa makampuni iliyochaguliwa
                        kuingia ubia.
                      </h5>
                      Unapokuwa mshirika wa kampuni ya NIHD, kampuni itaingia
                      makubaliano ya ubia kabla ya kuanza kutengeneza bidhaa na
                      usambazaji kwenye husika. Timu ya wataalamu kutoka Kampuni
                      ya NIHD itasimamia uwekaji wa mashine Katika kampuni ya
                      uzalishaji ili kufikia viwango vinavyohitajika kwa dawa za
                      mfumo PHVs. Pia utahitajika kutumia malighafi za dawa za
                      mfumo wa PHVs kutoka Kampuni ya NIHD kwa uzalishaji wa
                      dawa bora za Binadam.
                    </span>
                    <br />
                    <span>
                      <h5>5. Kudumisha uhusiano wa ubia;</h5>
                      Kwa kuelewa mahitaji yako na kufanya biashara yetu kwa
                      pamoja, kwa uadilifu, kujitolea, na kuzingatia mara kwa
                      mara taratibu za kampuni, tunalenga kuanzisha ushirikiano
                      wa kudumu baina yetu.
                    </span>
                    <br />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterComponent />
    </>
  );
};

export default MwenzaUbia;
