import React from "react";
import Header from "./Header";
import Topbar from "./Topbar";
import FooterComponent from "./FooterComponent";

const Vitality = () => {
  const gheading = {
    color: "#2c4964",
    textAlign: "left",
  };
  return (
    <div>
      <Topbar />
      <Header />

      <main id="main" style={{ paddingTop: "80px" }}>
        <section id="products" className="services">
          {/* column one start */}
          <div
            className="container p-5"
            style={{ textAlign: "justify", textJustify: "inter-word" }}
          >
            <div className="section-title">
              <h2>PHV-VITALITY</h2>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <h5 style={gheading}>JINA LA BIDHAA:</h5>
                <div>
                  <span style={{ color: "black" }}>Jina la asili:</span>
                  <br />
                  Nucleated PHV-39P Solution
                  <br />
                  <span style={{ color: "black" }}>Jina la biashara:</span>
                  <br />
                  PHV-VITALITY
                </div>
                <br />
                <h5 style={gheading}>UBORA NA VIAMBATA VILIVYOMO</h5>
                Kanuni ya dawa ni C19H27F, Kwa kila milimita ya ujazo wa
                Nucleated PHV-39P Solution ina idadi ya zaidi ya vivuli vya
                Nucleated PHV-39P ambayo huwekwa kwenye mmumunyo wa chumvi.
                Kipunje kimoja cha molekuli ya PHV-39P inayofanya kazi, inauzito
                wa Atomiki 293 na uwezo wa upenyaji kwenye tishu za binadamu kwa
                kiwango cha 117 cha uzito wa Atomiki kwa Makro sekunde. Kivuli
                cha Nucleated PHV-39P kwa ukubwa wa molekuli ina{" "}
                <span style={{ color: "black" }}>
                  vivuli vya kemikali chanya vya asili:{" "}
                </span>
                K-40, Na-23, Mg-25, Al-27, Si-29, O-17, F-19, CI-35
                <span style={{ color: "black" }}>
                  {" "}
                  Vivuli vya kemikali hasi vya asili:-{" "}
                </span>
                C-13, S-36, P-34, P-32, Si-30, Si-31, Si-32
                <h5 className="mt-3" style={gheading}>
                  MUONEKANO WA DAWA;
                </h5>
                <div>Ina rangi ya maji na ladha ya chumvi</div>
                <h5 className="mt-3" style={gheading}>
                  WASIFA WA UTENDAJI WA KAZI;
                </h5>
                <div>
                  <h6 style={{ color: "black" }}>Matibabu elekezi:-</h6>
                  Dawa Nucleated PHV-39P Solution ni dawa iliyopo katika kundi
                  la madawa yanayoimarisha baadhi ya mifumo mwilini.
                </div>
                <h6 className="mt-3" style={{ color: "black" }}>
                  Hutumika kwa ajili ya;
                </h6>
                kuimarisha utendaji kazi wa ubongo, misuli na kinga za mwili.
                <h6 className="mt-3" style={{ color: "black" }}>
                  Kutokana na utendaji kazi wa dawa;
                </h6>
                dawa Nucleated PHV-39P Solution inarejesha mpangilio wa huluki
                za kemikali za asili katika mfumo wa uelekeo wa X na Y kuwa
                sawia nadi ya KITEKIUHA 14, 22 na 6 ambazo zilivurugwa na
                magonjwa.
              </div>

              <div className="col-lg-4">
                <div>
                  <h6  style={{ color: "black" }}>
                    Namna ya utoaji wa dawa na vipimo vyake;
                  </h6>
                  Kiwango cha dawa kinachotumika na mgonjwa kinatafutwa kupitia
                  kanuni ya hesabu ya dawa PHV-63 Solution asilia;
                  <h6 className="mt-3" style={{ color: "black" }}>
                    Kanuni
                  </h6>
                  Uzito wa dawa Nucleated PHV-63 Solution kwa kiwango cha
                  molecule moja (Atomiki mass) X ujazo (ml) gawanya kwa uwezo wa
                  upenyaji kwenye tishu za binadamu.
                  <br />
                  Kiwango kinachopatikana ni kipimo cha matumizi ya dawa kwa umri
                  wa mgonjwa wa mwaka mmoja au sawa na mwenye uzito wa kilo
                  kumi.
                  <br />
                  Umri wa miaka 25 umechukuliwa kuwa ni umri wa mtu mzima, ni
                  sawa na umri kuanzia miaka 25 hadi 60, na zaidi ya umri wa
                  miaka 60 uchukuliwa ni sawa na umri wa chini ya miaka 25.
                  <br />
                  Mtoto mchanga atapewa 0.125 ml/kg kulingana na uzito
                  unaokubalika na haya mahesabu yatafanywa na Daktari au;
                  <br />
                  Mtu mzima anatumia mililita 63 za dawa Nucleated PHV-39P
                  Solution usiku wakati wa kulala, lakini awe amekula chakula
                  cha kutosha. Baada ya hapo mgonjwa anahitajika apewe dozi kama
                  hiyo baada ya muda wa siku sita kupita kwa ajili ya kupata
                  matokeo bora ya utendaji kazi wa dawa. Utaratibu huu wa dawa
                  unahitajika urudiwe kwa awamu sita. Kila awamu ni baada ya
                  miezi miwili kupita.
                  <br />
                  Watoto wenye umri wa mwaka 1-10 watahitajika kupewa dawa
                  Nucleated PHV-39P Solution milita 2.5 hadi 25 kwa kunywa na
                  watatumia dawa kwa umbali sawa na wakubwa na idadi ya awamu.
                  Na kiwango cha milita 1-10 za dawa zitatolewa baina ya umbali
                  wa awamu na awamu kulingana uzito wa mgonjwa. Kiwango cha dawa
                  Nucleated PHV-39P Solution kitatumika kulingana na uzito wa
                  watoto wachanga
                  <br />
                  <br />
                </div>
              </div>

              <div className="col-lg-4">
                <div>
                  kuanzia umri wa mwaka 0 hadi 1 kwa kufuata milita 0.125 kwa
                  kila kilo ya mtoto zinazokubalika kulingana na hatua za
                  ukuaji.
                  <h6 className="mt-3" style={{ color: "black" }}>
                    Ushauri;
                  </h6>
                  Matibabu yafanyike ya Nucleated PHV-39P Solution baada ya
                  mgonjwa kupona vizuri kutoka kwenye magonjwa sugu.
                  <div>
                    <h6 className="mt-3" style={{ color: "black" }}>
                      Hairuhusiwi kutumika kwa;
                    </h6>
                    Nucleated PHV-39P Solution hairuhusiwi kutumika kwa mgonjwa
                    ambaye jamii ya dawa hii inamsababishia madhara makubwa.
                  </div>
                  <div>
                    <h6 className="mt-3" style={{ color: "black" }}>
                      Mazingatio na Tahadhari;
                    </h6>
                    Kabla ya kutumia dawa hakikisha umekula chakula cha kutosha
                    na kufanya mazoezi kila siku jioni kwa muda wa nusu saa.
                  </div>
                  <div>
                    <h6 className="mt-3" style={{ color: "black" }}>
                      Mwingiliano na bidhaa zingine za matibabu na aina zingine
                      za mwingiliano katika utendaji kazi;
                    </h6>
                    Utumiaji wa dawa Nucleated PHV-39P Solution pamoja na pombe
                    kunapunguza utendaji kazi wa dawa ya Nucleated PHV-39P
                    Solution mwilini.
                    <div>
                      <h6 className="mt-3" style={{ color: "black" }}>
                        Ujauzito na Unyonyeshaji;
                      </h6>
                      Dawa Nucleated PHV-39P Solution ni salama kwa mama
                      mjamzito na anayenyonyesha.
                    </div>
                  </div>
                  <h6
                    className="mt-4"
                    style={{ color: "black", textTransform: "lowercase" }}
                  >
                    ATHARI JUU YA UWEZO WA KUENDESHA VYOMBO VYA MOTO NA KUTUMIA
                    MITAMBO;
                  </h6>
                  Hapana kuendesha vyombo vya moto na kuendesha mitambo
                  unapokuwa kwenye matibabu ya Nucleated PHV-39P Solution la
                  sivyo unaruhusiwa baada ya kuthibitishwa na daktari hivyo basi
                  uko thabiti kwa hilo.
                </div>
              </div>
            </div>
          </div>
          {/* column 1 end */}

          <div style={{ position: "relative", top: "-40px" }}>
            <p style={{ width: "1%", margin: "0 auto", color: "green" }}>1</p>
            <hr
              style={{
                borderTop: "6px solid darkblue",
                width: "3%",
                margin: "0 auto",
              }}
            />
          </div>

          {/* column 3 start */}
          <div
            className="container p-5"
            style={{ textAlign: "justify", textJustify: "inter-word", marginTop: "-60px" }}
          >
            <div className="row">
              <div className="col-lg-4">
                <div>
                  <h6 style={{ color: "black" }}>Athari zisizohitajika;</h6>
                  Kwa ujumla Dawa Nucleated PHV-39P Solution haina usumbufu kwa
                  watu wazima na watoto, ila mara chache kwa baadhi ya watumiaji
                  husababisha maudhi madogo madogo ambayo hayahitaji dawa
                  kusitishwa. Maudhi hayo ni maumivu ya kichwa kidogo, kuhisi
                  uchovu, kichefuchefu, Tumbo kuuma na mara chache kizunguzungu
                  , athari ya ngozi, kuwashwa, uvimbe, maumivu ya mgongo. Dalili
                  hizi zote zinaondoka kwa kula chakula cha kutosha na kufanya
                  mazoezi ya afya.
                </div>
                <div>
                  <h6 className="mt-3" style={{ color: "black" }}>
                    Kupitiliza kiwango cha dawa;
                  </h6>
                  Kupitiliza kiwango cha Nucleated PHV-39P Solution mara sita
                  kuliko kipimo halisi, kunaweza kusababisha kushuka sukari
                  mwilini, Iwapo imetokea mgonjwa aliyepitiliza kiwago cha dawa
                  na kusababisha madhara ya kimwili, mara moja apatiwe huduma
                  kwa kuanza na kumuwekea chupa yenye Dextrose 10% kupitia
                  mishipa ya vena. Mgonjwa aliyepitiliza kiwango cha dawa
                  anahitaji uangalifu na apatiwe matibabu kulingana na hali
                  yake.
                  <h5 className="mt-3" style={gheading}>
                    UTHAMANI WA UTENDAJI KAZI WA DAWA ;
                  </h5>
                  <div>
                    <h6 className="mt-3" style={{ color: "black" }}>
                      Kundi la utibabu wa dawa;
                    </h6>
                    Imetaarishwa kwa ajili ya kuamsha na kurekebisha taratibu
                    zote za mwili ambazo zinaimarisha afya ya akili,misuli na kinga
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                 mwilini kwa kiwango cha juu cha utendaji
                 <br/>
                 <br/>
                <h6 className="mt-0" style={{ color: "black" }}>
                  Namna ya ufanyaji kazi wa dawa;
                </h6>
                Kiambata cha dawa Nucleated PHV-39P Solution kinakamatana na
                KITEFUHA S katika matabaka yaliyopo mwilini na kuanza kufanya
                kazi iliyokusudiwa. Kiambata cha dawa Nucleated PHV-39P Solution
                <div>
                  kinakamatana kikamilifu na KITEFUHA S sehemu ya ndani ya
                  kuteha na kuzalisha VITEMA (viini tete mahitaji) ( amino
                  acids) sawa na vile vinavyozalishwa na kuteha za mwili kupitia
                  mpangilio wa huluku za kemikali zilizopo ndani ya Purini na
                  Pyrimidini ambazo zinatumika kurekebisha kuteha zilizopata
                  hililafu kutokana na magonjwa kuondoa vitu visivyohitajika
                  kama vile viambata dawa na sumu mwilini. Dawa Nucleated
                  PHV-39P Solution ni dawa ambayo inapangilia utendaji sawia wa
                  vinasaba vya mwili na kuwezesha utendaji salama wa kuteha zote
                  za mwili
                </div>
                <h5 className="mt-3" style={gheading}>
                  WASIFA WA DAWA MWILINI;
                </h5>
                <div>
                  <h6 className="mt-3" style={{ color: "black" }}>
                    Ufonzwaji wa dawa;
                  </h6>
                  Baada ya kunywa dawa Nucleated PHV-39P Solution kiambata cha
                  dawa katika hali ya kivuli uingia ndani ya kuteha moja kwa
                  moja kutoka katika mfumo wa chakula. Kiambata cha dawa PHV-39P
                  Solution kinasambaa mwilini na kukamatana na Kuteha za mwili
                  pamoja na virusi madhara na kuanza kufanya marekebisho na
                  uuwaji wa virusi kutokana na asili yake.
                </div>
              </div>

              <div className="col-lg-4">
                <div>
                  <div>
                    {/* na kuanza kufanya marekebisho na uhaji wa virusi kutokana na
                    asili yake. */}
                    <h6 className="mt-0" style={{ color: "black" }}>
                      Utokaji wa dawa mwilini;
                    </h6>
                    Kiambata cha Nucleated PHV-39P kinatenganisha kemikali zote
                    mwilini ambazo si asilia na kuruhusiwa kutoka mwilini
                    kupitia mishipa ya lymph na kutolewa nje ya mwili kupitia
                    figo, mapafu, ngozi na kinyesi.
                  </div>
                  <h5 className="mt-3" style={gheading}>
                    WASIFA WA DAWA;
                  </h5>
                  <div>
                    <h6 className="mt-3" style={{ color: "black" }}>
                      Orodha ya vibebeo vya dawa;
                    </h6>
                    Sodium Lactate, Sodium Chloride, Potassium Chloride, Calcium
                    Chloride yenye maji kidogo.
                  </div>
                  <div>
                    <h6 className="mt-3" style={{ color: "black" }}>
                      Vipingamizi vya dawa;
                    </h6>
                    Hakuna vizuizi
                  </div>
                  <h6 className="mt-3" style={{ color: "black" }}>
                    Muda wa uwezo wa dawa kukaa;
                  </h6>
                  Dawa Nucleated PHV-39 Solution huchukua takriban miaka 3 kishi
                  bila ya kuharibika inapohifadhiwa chini ya utaratibu
                  uliopendekezwa.
                  <h6 className="mt-3" style={{ color: "black" }}>
                    Tahadhari maalum pindi unahifadhi;{" "}
                  </h6>
                  Hifadhi mahali pakavu chini ya au kwa nyuzi joto 25C0. Ikinge
                  na mionzi ya jua. Iweke mbali na watoto.
                  <h6 className="mt-3" style={{ color: "black" }}>
                    Uwalisia wa dawa na ilivyohifadhiwa kwenye chombo;
                  </h6>
                  Nucleated PHV-39P Solution;
                  <br />
                  Imehifadhiwa kwenye chupa ya milimita 63 ya ujazo. Kila chupa
                  ya dawa katika kifungashio chake kuna kipeperushi cha maelezo.
                </div>
              </div>
            </div>
          </div>

          <p style={{ width: "1%", margin: "0 auto", color: "green" }}>2</p>
          <hr
            style={{
              borderTop: "6px solid darkblue",
              width: "3%",
              margin: "0 auto",
            }}
          />

          {/* column three end */}
        </section>
      </main>

      <FooterComponent />
    </div>
  );
};

export default Vitality;
