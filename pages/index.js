import { useCallback } from "react";

const Home = () => {
  const onLogoComponentClick = useCallback(() => {
    // Please sync "Home" to the project
  }, []);

  return (
    <main className="relative bg-indigo w-full h-[6733px] overflow-hidden text-left text-base text-white">
      <img
        className="absolute top-[0px] left-[540px] w-[1210px] h-[1210px]"
        alt=""
        src="/images/square.png"
      />
      <img
        className="absolute top-[0px] left-[702px] w-[976px] h-[1157.88px] object-cover"
        alt=""
        src="images/image 3.png"
      />
      <img
        className="absolute top-[3942px] left-[0px] w-[1088px] h-[1088px]"
        alt=""
        src="/images/square.png"
      />
      <img
        className="absolute top-[4420px] left-[768px] w-[910px] h-[1049.28px] object-cover"
        alt=""
        src="../image-2@2x.png"
      />
      <img
        className="absolute top-[5676px] left-[900px] w-[1088px] h-[1088px]"
        alt=""
        src="/images/square.png"
      />
      <h1
        className="m-[0] absolute top-[200px] left-[60px] text-2xl leading-[120px] font-krona-one inline-block"
        tagline1
      >
        thinking
      </h1>
      <h1
        className="m-[0] absolute top-[361px] left-[420px] text-2xl leading-[120px] font-krona-one inline-block"
        tagline2
      >
        the
      </h1>
      <h1
        className="m-[0] absolute top-[489px] left-[932px] text-2xl leading-[120px] font-krona-one inline-block"
        tagline4
      >
        next
      </h1>
      <h1
        className="m-[0] absolute top-[609px] left-[1119px] text-2xl leading-[120px] font-krona-one inline-block"
        tagline3
      >
        move
      </h1>
      <img
        className="absolute top-[89px] left-[420px] rounded-[95px] w-[729px] h-[720px] object-cover"
        alt=""
        src="images/DSC08470-2 1.png"
      />
      <div className="absolute top-[2034px] left-[-524px] w-[2455.95px] h-[1763.64px]">
        <img
          className="absolute top-[944px] left-[524px] w-[1108px] h-[819.64px] object-cover"
          alt=""
          src="../image-31@2x.png"
        />
        <img
          className="absolute top-[0px] left-[1258.95px] w-[1197px] h-[1197px]"
          alt=""
          src="images/square.png"
        />
        <div className="absolute top-[423px] left-[667px] text-4xl font-krona-one inline-block w-[770px] h-[96px]">
          projects
        </div>
        <div className="absolute top-[946px] left-[1590px] leading-[155.6%] inline-block w-[376px] h-[194px]">
          <span>{`Having the benefit of the disabled in mind, we are developing `}</span>
          <i className="font-black">Xavier</i>
          <span>
            , a prototype electric wheelchair controlled by brain signals.
          </span>
        </div>
        <div className="absolute top-[1194px] left-[1590px] leading-[155.6%] inline-block w-[376px] h-[83px]">
          <span>{`But that’s not all. Discover `}</span>
          <i className="font-black text-red">More of our projects</i>
          <span> !</span>
        </div>
        <div className="absolute top-[568px] left-[792px] bg-red w-[14px] h-[77px]" />
        <div className="absolute top-[695px] left-[1590px] leading-[155.6%] inline-block w-[376px] h-[194px]">
          Our projects involve mainly brain signal processing from EEG, and its
          translation into real-world applications by a brain-computer
          interface.
        </div>
        <img
          className="absolute top-[568px] right-[895.95px] w-[710px] h-[697.36px]"
          alt=""
          src="../group-34.svg"
        />
      </div>
      <div
        className="absolute top-[1352px] left-[137px] w-[1454px] h-[987px] text-center"
        section2
      >
        <div className="absolute top-[151px] left-[379px] leading-[155.6%] text-left inline-block w-[696px] h-[201px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </div>
        <div className="absolute top-[937px] left-[302px] leading-[155.6%] inline-block w-[849px] h-[50px]">
          <span>{`Wanna learn more? Check out our `}</span>
          <i className="font-black text-red">{`Free Webminars `}</i>
          <span>!</span>
        </div>
        <div className="absolute top-[30px] left-[773px] bg-red w-[61px] h-[129px] [transform:_rotate(90deg)] [transform-origin:0_0]" />
        <div className="absolute top-[0px] left-[0px] text-xl leading-[120px] font-krona-one flex items-center justify-center w-[1454px] h-[122px]">
          We believe BCI is the future
        </div>
      </div>
      <div
        className="absolute top-[5354px] left-[146px] w-[1377px] h-[441px]"
        supportjoin
      >
        <div className="absolute top-[138px] left-[920px] leading-[155.6%] inline-block w-[457px] h-[303px]">
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>
              You cannot wait to build the future by your own hands, while
              getting to know great people along the way? Feel free to get in
              touch with us. No prior knowledge about Neurotechnology? Don’t
              worry, you can learn on the fly!
            </span>
          </p>
          <p className="m-[0] text-red">
            <i className="font-black">Get in touch</i>
          </p>
        </div>
        <div className="absolute top-[145px] left-[180px] leading-[155.6%] inline-block w-[457px] h-[249px]">
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>
              If you wish to contribute to our efforts, donate to us directly or
              via PayPal. Your ideas are also very important to us, so feel free
              to get in touch with us via email.
            </span>
          </p>
          <p className="m-[0] text-red">
            <i className="font-black">Contact us</i>
            <span className="font-black font-chivo text-white">{` / `}</span>
            <i className="font-black font-chivo text-red">PayPal</i>
          </p>
        </div>
        <div className="absolute top-[11px] left-[754px] text-3xl leading-[120px] font-krona-one flex items-center w-[446px] h-[122px]">
          join us
        </div>
        <div className="absolute top-[0px] left-[0px] text-3xl leading-[120px] font-krona-one flex items-center w-[700px] h-[133px]">
          support us
        </div>
        <div className="absolute top-[154px] left-[122px] bg-red w-[14px] h-[77px]" />
        <div className="absolute top-[145px] left-[859px] bg-red w-[14px] h-[77px]" />
      </div>
      <div
        className="absolute top-[3513px] left-[147px] w-[1377px] h-[785px]"
        events
      >
        <div className="absolute top-[0px] left-[0px] text-4xl font-krona-one inline-block w-[458px] h-[96px]">
          events
        </div>
        <div className="absolute top-[535px] left-[179px] leading-[155.6%] inline-block w-[458px] h-[157px]">
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>
              To spread our fascination with BCI, we often join events organized
              by the student committee or other partners.
            </span>
          </p>
          <p className="m-[0] text-red">
            <i className="font-black">{`Follow us on instagram for more `}</i>
          </p>
        </div>
        <div className="absolute top-[664px] left-[919px] leading-[155.6%] inline-block w-[458px] h-[121px]">
          We also have teambuilding from time to time to have fun with each
          other while enriching the team spirit!
        </div>
        <div className="absolute top-[150px] left-[179px] w-[340px] h-[340px]">
          <img
            className="absolute top-[0px] left-[0px] w-[340px] h-[340px] object-cover"
            alt=""
            src="../screen-shot-20220601-at-1125-1@2x.png"
          />
        </div>
        <div className="absolute top-[150px] left-[549px] w-[340px] h-[340px]">
          <img
            className="absolute top-[0px] right-[0px] w-[340px] h-[340px] object-cover"
            alt=""
            src="../coverphoto@2x.png"
          />
        </div>
        <div className="absolute top-[284px] left-[919px] w-[340px] h-[340px]">
          <img
            className="absolute top-[0px] right-[0px] w-[340px] h-[340px] object-cover"
            alt=""
            src="../coverphoto1@2x.png"
          />
        </div>
        <div className="absolute top-[150px] left-[121px] bg-red w-[14px] h-[77px]" />
      </div>
      <div className="absolute top-[2099px] left-[230px] leading-[155.6%] text-center inline-block w-[404px] h-[150px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </div>
      <div className="absolute top-[2105px] left-[1123px] leading-[155.6%] text-center inline-block w-[404px] h-[150px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </div>
      <i className="absolute top-[2004px] left-[534px] text-lg leading-[155.6%] inline-block font-black text-center w-[696px] h-[201px]">
        BCI - Brain Computer Interface
      </i>
      <img
        className="absolute top-[1794px] left-[290px] w-[283px] h-[259px] object-cover"
        alt=""
        src="../screen-shot-20220803-at-1744-1@2x.png"
      />
      <img
        className="absolute top-[1810px] left-[1214px] w-[221px] h-[228px] object-cover"
        alt=""
        src="../screen-shot-20220803-at-1750-1@2x.png"
      />
      <div
        className="absolute top-[4415px] left-[268px] w-[1167px] h-[793px] text-center text-2xl font-krona-one"
        team
      >
        <div className="absolute top-[121px] left-[325px] bg-red w-[496px] h-[71px]" />
        <div className="absolute top-[0px] left-[153px] w-[861px] h-[312px]">
          <div className="absolute top-[0px] left-[0px] leading-[86px] flex items-center w-[861px] h-[312px]">
            <span className="[line-break:anywhere] w-full">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                We are a team of
              </p>
              <p className="[margin-block-start:0] [margin-block-end:0px]">{`15 members `}</p>
              <p className="m-[0]">and growing!</p>
            </span>
          </div>
        </div>
        <div className="absolute top-[363px] left-[0px] w-[1167px] h-[180.42px]">
          <img
            className="absolute top-[0px] left-[986.58px] w-[180.42px] h-[180.42px] object-cover"
            alt=""
            src="../screen-shot-20220803-at-1833-1@2x.png"
          />
          <img
            className="absolute top-[0px] left-[591.32px] w-[181.46px] h-[180.42px] object-cover"
            alt=""
            src="../screen-shot-20220803-at-1833-2@2x.png"
          />
          <img
            className="absolute top-[0px] left-[0px] w-[180.42px] h-[180.42px] object-cover"
            alt=""
            src="../screen-shot-20220803-at-1834-1@2x.png"
          />
          <img
            className="absolute top-[0px] left-[394.21px] w-[181.46px] h-[180.42px] object-cover"
            alt=""
            src="../screen-shot-20220803-at-1834-2@2x.png"
          />
          <img
            className="absolute top-[0px] left-[197.11px] w-[181.46px] h-[180.42px] object-cover"
            alt=""
            src="../screen-shot-20220803-at-1834-3@2x.png"
          />
          <img
            className="absolute top-[0px] left-[788.43px] w-[181.46px] h-[180.42px] object-cover"
            alt=""
            src="../screen-shot-20220803-at-1834-4@2x.png"
          />
        </div>
        <div className="absolute top-[592px] left-[58px] text-base leading-[155.6%] text-left inline-block w-[574px] h-[201px] font-chivo">
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>
              Our team members are engaging, international students from
              different field of study and backgrounds, mostly studying at RWTH
              Aachen University or FH Aachen.
            </span>
          </p>
          <p className="m-[0] text-red">
            <i className="font-black">Get to know our team</i>
          </p>
        </div>
        <div className="absolute top-[600px] left-[0px] bg-red w-[14px] h-[77px]" />
      </div>
      <div className="absolute top-[1877px] left-[614px] w-[537px] h-[91px]">
        <img
          className="absolute top-[0px] left-[0px] w-[537px] h-[91px] object-cover"
          alt=""
          src="images/interface.png"
        />
      </div>
      <div
        className="absolute top-[5888px] left-[103px] w-[1262px] h-[323px] text-center text-3xl font-krona-one"
        partners
      >
        <img
          className="absolute top-[160px] left-[236px] w-[211px] h-[163px] object-cover"
          alt=""
          src="../109699780-10158937354983706-6296669628113970900-n@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] leading-[120px] flex items-center justify-center w-[718px] h-[140px]">
          our partners
        </div>
        <img
          className="absolute top-[196px] left-[1013px] w-[249px] h-[82px] object-cover"
          alt=""
          src="../autak-logo-whitenoslogan@2x.png"
        />
        <img
          className="absolute top-[196px] left-[606px] w-[248px] h-[92px] object-cover"
          alt=""
          src="../screen-shot-20220803-at-1712-1@2x.png"
        />
      </div>
      <div className="absolute top-[6376px] left-[0px] w-[1728px] h-[357px]">
        <footer
          className="absolute top-[0px] left-[0px] w-[1728px] h-[357px] text-left text-sm text-indigo font-chivo"
          footer
        >
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../square.svg"
          />
          <div
            className="absolute h-[48.97%] w-[19.97%] top-[23.48%] left-[53.3%] leading-[39.5px] inline-block"
            footercontact
          >
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              <span className="font-black">Contact us</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              <span>neurotx.aachen@gmail.com</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              <span>Instagram</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              <span>Facebook</span>
            </p>
            <p className="m-[0]">
              <span>Twitter</span>
            </p>
          </div>
          <div
            className="absolute h-[48.97%] w-[21.35%] top-[23.48%] left-[77.55%] leading-[39.5px] inline-block"
            footeraddress
          >
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              <span className="font-black">Adresse</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              <span>NeuroTX Aachen e.V.,</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              <span>Collective Incubator e.V.</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              <span>Jülicher Str. 209</span>
            </p>
            <p className="m-[0]">
              <span>52070 Aachen</span>
            </p>
          </div>
          <strong
            className="absolute h-[9.2%] w-[30.03%] top-[68.91%] left-[5.79%] leading-[39.5px] flex italic font-black items-center"
            copyright
          >
            Copyright © 2022 NeuroTX-Aachen
          </strong>
          <p
            className="m-[0] absolute h-[33.56%] w-[34.09%] top-[23.53%] left-[5.79%] leading-[39.5px] inline-block"
            legal
          >
            NeuroTX Aachen e.V. ist eingetragen beim Amtsgericht Aachen, Nr.
            VR 6094. Vertretungsberechtigter Vorstand gemäß § 26 BGB: Mohamed
            Alhaskir.
          </p>
        </footer>
      </div>
      <p
        className="m-[0] absolute top-[578px] left-[60px] leading-[155.6%] inline-block w-[544px] h-[201px]"
        intro
      >
        <span>{`We are `}</span>
        <i className="font-black">NeuroTX</i>
        <span>,</span>
        <b>{`  `}</b>
        <span>{`a student team from Aachen, Germany aiming to cultivate a learning environment and  hands-on experience in the field of `}</span>
        <i className="font-black">neurotechnology</i>
        <span>.</span>
      </p>
      <div className="absolute top-[773px] left-[60px] w-[259px] h-[57px] text-center">
        <div className="absolute top-[0px] left-[0px] bg-red [border:7px_solid_#eb0000] box-border w-[259px] h-[57px]" />
        <i className="absolute top-[0px] left-[0px] leading-[52.5px] capitalize flex font-black items-center justify-center w-[259px] h-[57px]">
          Join us!
        </i>
      </div>
      <div className="absolute top-[0px] left-[0px] w-full h-[90px]">
        <header className="absolute top-[0px] left-[0px] w-full h-[90px] text-center text-xs text-white font-krona-one">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            
              <div className="absolute top-[0px] left-[50px] bg-red w-[90px] h-[90px]" >
              <img
                className="absolute top-[11px] left-[12px] w-[68px] h-[68px] object-cover"
                alt=""
                src="images/logo.png"
              />
            </div>

            <div className="absolute p-6 flex flex-row justify-evenly right-[0px] w-[700px] h-[90px]">
            <div className="  h-full w-full inline-block">
                <a className="">home</a>
              </div>
  
        
              <div className="  h-full w-full inline-block">
                <a className="">learn</a>
              </div>
  
            
              <div className=" h-full w-full inline-block">
                <a className="">projects</a>
              </div>
  
          
              <div className=" h-full w-full inline-block">
                <a className="">team</a>
              </div>
  
            
              <div className=" h-full w-full inline-block">
                <a className="">contact</a>
              </div>

            </div>
          </div>
        </header>
      </div>
      </main>
  );
};

export default Home;
