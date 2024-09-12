import React from 'react';
import Topbar from './Topbar';
import Header from './Header';
import FooterComponent from './FooterComponent';

const SheriaUbia = () => {
  return (
    <>
      <Topbar />
      <Header />
      <main id="main" style={{ paddingTop: "80px" }}>
        <section id="partnership" className="services" style={{}}>
          <div className="container">
            <div className="section-title">
              <h2>Sheria na Masharti ya ubia</h2>
            </div>
            <div className="row">
              <div className="col-md-12"  >
                <div style={{ wordSpacing: '10px', lineHeight: '1.5',textAlign: "justify", textJustify: "inter-word" }}>
              
                  <ul className="list-group list-group-flush">
                    <span>
                      <h5>1. Kampuni inayojiunga nasi lazima iwe na leseni ya kitaifa au ya kimataifa ya utengenezaji dawa za Binadam. </h5>
                      
                    </span>
                    <span>
                      <h5>2. Kampuni inayoomba ubia lazima ilipe dola za Kimarekani 1000 kwa ajili ya fomu ya maombi. Gharama hii haitorejeshwa iwapo kampuni limekosa kuteuliwa kuwa mbia wa kampuni ya NIHD.</h5>
                      
                    </span>
                    <span>
                      <h5>3. kampuni linalotarajia kupata fursa za ubia kutoka kampuni ya NIHD ni sharti liwe tayari kukubaliana na kufuata sheria zote za Kampuni.</h5>
                      
                    </span>
                    <span>
                      <h5>4. Makubaliano mengine kama vile ugavi wa faida, sheria za biashara na sheria za wateja. Mshirika anapaswa kutuma timu ya usimamizi wa juu kama vile Mkurugenzi Mtendaji, mkuu wa waendeshaji ili kujadiliana na timu yetu ya Usimamizi. Huruhusiwi kutuma mfanyakazi wa forodha pekee kwa makubaliano haya ya majadiliano.</h5>
                      
                    </span>
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

export default SheriaUbia;
