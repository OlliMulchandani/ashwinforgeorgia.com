import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
// import img from "../images/solo-wide.jpg";
// import img from "../images/writing-club.jpg";
import thind from "../images/thind.jpg";
import img from "../images/headshot3.jpeg";
import headshot3 from "../images/headshot3.jpeg";
import capitol from "../images/capitol.jpeg";
import district from "../images/2023SD48.png";
import circle from 'uswds/img/circle-124.png';
import ashwinMvp from '../images/ashwin-mvp-cropped.jpg';
import suspended from '../images/suspended.png';
import still2 from '../images/still 2.png';
import headshot from '../images/headshot-square.jpeg';
import still from '../images/still.jpeg';
import leafblowers from '../images/leaf blowers.jpeg';
import jif from '../images/jif-fellows.jpeg';
import sossa from '../images/sossa.jpg';

const Callout = (props) => (
  <div {...props}>
    <div className="usa-hero__callout">
      {/* <h2 className="usa-hero__heading">
        Let's get things done. 👋
      </h2>
      <p>
        I'm Ashwin Ramaswami. Let's work together on the issues that really matter in Georgia's 48th state senate district.
      </p>
      <a className="usa-button" href="/">
        Join Us
      </a> */}
    </div>
  </div>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <section className="usa-hero" style={{ backgroundImage: `url(${img})` }}>
      <div className="grid-container">
        <Callout className="hidden-mobile" />
      </div>
    </section> */}
    <section className="grid-container usa-section usa-prose">
      <div className="grid-row grid-gap">
        <div className="tablet:grid-col-6">
          <img src={headshot3} />
        </div>
        <div className="tablet:grid-col-6 home-main">
          <h1 className="">
            Let's get things done. 👋
          </h1>
          <p>
            I'm Ashwin Ramaswami. Let's work together on the issues that really matter in Georgia's 48th state senate district.
          </p>
          {/* <div className="grid-row grid-gap"> */}
          <input type="text" className="usa-input tablet:grid-col-6" placeholder="Name" /> <br />
          <input type="text" className="usa-input tablet:grid-col-6" placeholder="Email" /> <br />
          <input type="text" className="usa-input tablet:grid-col-6" placeholder="Zip" /> <br /> <br />
          <a className="usa-button" href="/">
            Join Us
          </a>
          {/* </div> */}
        </div>
      </div>
      <hr />
    {/* <Callout className="hidden-desktop" /> */}
      <div className="grid-row grid-gap">
        <div className="tablet:grid-col-4">
          <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center">
            tl;dr<br />

            <img src={thind} />
          </h2>
        </div>
        <div className="tablet:grid-col-8 usa-prose">
          <p>
            <ul>
              <li><strong>I'm from Johns Creek, GA</strong> and have experience in software engineering, entrepreneurship, investing, law, and policy.</li>
              <li><strong>Incumbent Shawn Still got indicted</strong> for trying to overturn the 2020 election results, while I've worked on securing our elections since 2020.</li>
              <li><strong>I'd be the first Hindu American to be a Georgia state legislator</strong> and first South Asian to represent this district.</li>
              <li><strong>Let's make transformative investments</strong> in technology, education, transit, public safety, and government capacity. Let's imagine a better future together!</li>
            </ul>
          </p>
          {/* <p>
            We’re in a moment where politics is often devoid of substance and focused on show. Incumbent Shawn Still for the 48th state senate district has proved unfit for office, focusing on overturning the 2020 election results and gas-powered lawn mowers rather than the issues that affect our communities every day, such as education, jobs, healthcare costs, public safety, transportation, and government capacity.
          </p>
          <p>
            Increasingly, we are also facing bigger issues around technology, from education and ChatGPT/AI to children's safety on social media, while few in the state legislature actually have the tech experience to understand and address these issues.
          </p>
          <p>
            I'd be a Senator for all, as the . I look forward to bringing my experience in law and federal policy to help address issues in our state.
          </p> */}
        </div>
      </div>
      <hr />
      <div className="grid-row grid-gap">
        <div className="tablet:grid-col-4">
          <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center">
            About Senate District 48<br />


          </h2>
          <p>
            Senate District 48 contains parts of North Fulton County, South Forsyth County, and North Gwinnett County and parts of Johns Creek, Cumming, and Sugar Hill. To see if you live in the district, check your voter registration at <a target="_blank" href="https://mvp.sos.ga.gov/">mvp.sos.ga.gov</a> or look up your address on <a target="_blank" href="https://georgia.redistrictingandyou.org/?districtType=sd&propA=current_2012&propB=genassm_20211104&selected=-84.150,34.082&opacity=2#%26map=12.29/34.15027/-84.1564">this search tool</a>.
          </p>
        </div>
        <div className="tablet:grid-col-8 usa-prose">

          <a target="_blank" href="https://www.senate.ga.gov/senators/Documents/Maps/2023SD48.pdf"><img src={district} /></a>
          <p style={{ textAlign: "center" }}><strong>Schools in this district:</strong></p>
          <div className="grid-row" style={{ marginTop: 0 }}>
            <ul className="tablet:grid-col-6">
              {/* <li>Abbotts Hill Elementary School</li>
            <li>Barnwell Elementary School</li>
            <li>Big Creek Elementary School</li>
            <li>Creek View Elementary School</li>
            <li>Daves Creek Elementary School</li>
            <li>Dolvin Elementary School</li>
            <li>Findley Oaks Elementary School</li>
            <li>Johns Creek Elementary School</li>
            <li>Lake Windward Elementary School</li>
            <li>Ocee Elementary School</li>
            <li>Medlock Bridge Elementary School</li>
            <li>Roberts Elementary School</li>
            <li>Riverside Elementary School</li>
            <li>Settles Bridge Elementary Schol</li>
            <li>Shakerag Elementary School</li>
            <li>Sharon Elementary School</li>
            <li>State Bridge Crossing Elementary School</li>
            <li>Sugar Hill Elementary School</li>
            <li>Sycamore Elementary School</li>
            <li>White Oak Elementary School</li>
            <li>Wilson Creek Elementary School</li> */}

              <li>Autrey Mill Middle School</li>
              <li>Lanier Middle School</li>
              <li>Riverwatch Middle School</li>
              <li>River Trail Middle School</li>
              <li>South Forsyth Middle School</li>
              <li>Taylor Road Middle School</li>
              <li>Webb Bridge Middle School</li>

            </ul>
            <ul className="tablet:grid-col-6">
              <li>Chattahoochee High School</li>
              <li>Johns Creek High School</li>
              <li>Lambert High School</li>
              <li>Northview High School</li>
              <li>North Gwinnett High School</li>
              <li>South Forsyth High School</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <hr />
    <section className="usa-graphic-list usa-section why-not" style={{paddingTop: 0}}>  {/* usa-section--dark" */}
  <h1>Unlike Shawn Still, Ashwin works on the REAL issues.</h1>
  <h1>In 2020...</h1>
  <div className="grid-container">
    <div className="usa-graphic-list__row grid-row grid-gap">
      <div className="usa-media-block tablet:grid-col">
        <img className="usa-media-block__img" src={still} alt="Shawn Still" />
        <div className="usa-media-block__body">
          <h3 className="usa-graphic-list__heading">
            Shawn Still was trying to overturn the results of Georgia's election.
          </h3>
          <p>
            <img src={still2} />
          </p>
        </div>
      </div>
      <div className="usa-media-block tablet:grid-col">
        <img className="usa-media-block__img" src={headshot} alt="Ashwin Ramaswami" />
        <div className="usa-media-block__body">
          <h3 className="usa-graphic-list__heading">
            Ashwin worked with Secretary of State Raffensperger's office to secure Georgia's elections.
          </h3>
          <p>
            <img src={ashwinMvp} />
          </p>
        </div>
      </div>
    </div>
    <hr />
    <h1>In 2022...</h1>
    <div className="grid-container">
      <div className="usa-graphic-list__row grid-row grid-gap">
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src={still} alt="Shawn Still" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              Shawn Still focused his legislative work on the LEAF Act, which would ban gas-powered leaf blowers.
            </h3>
            <p>
              <img src={leafblowers} />
              {/* TODO: add attribution - https://commons.wikimedia.org/wiki/File:Husqvarna_leaf_blowers.jpg */}
            </p>
          </div>
        </div>
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src={headshot} alt="Ashwin Ramaswami" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              Ashwin's research led Congress to introduce a bill on securing our small businesses through open source software.
            </h3>
            <p>
              <img src={sossa} />
            </p>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <h1>In 2023...</h1>
    <div className="grid-container">
      <div className="usa-graphic-list__row grid-row grid-gap">
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src={still} alt="Shawn Still" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              Shawn Still got indicted for impersonating a public officer and forgery in the first degree and is currently awaiting trial.
            </h3>
            <p>
              <img src={suspended} />
            </p>
          </div>
        </div>
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src={headshot} alt="Ashwin Ramaswami" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              Ashwin helped provide state and local courts with technologists to improve court access for people without lawyers.
            </h3>
            <p>
              <img src={jif} />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </Layout>
);

export default IndexPage;
