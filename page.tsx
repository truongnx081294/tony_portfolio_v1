/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import "./page.css";
import logo from "@/assets/images/logo.png";
import bg from "@/assets/images/BG.png";
import imageAbout from "@/assets/images/imageAbout.jpg";
import imageHero from "@/assets/images/imageHero.svg";

export default function Page() {
  return (
    <main>
      <header>
        <nav>
          <div className="nav-logo">
            <a href="">
              <Image src={logo} alt="" />
            </a>
          </div>
          <ul className="menu">
            <li className="nav-item selected">
              <a href="" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Works
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="section section-home">
        <h1 className="name-author">
          Hi, I'm <span>Truong Gia</span>
        </h1>
        <h3>Front-end Developer</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <ul className="social-list">
          <li className="item-social">
            <a href="">
              <i className="ri-facebook-circle-fill"></i>
            </a>
          </li>
          <li className="item-social">
            <a href="">
              <i className="ri-github-fill"></i>
            </a>
          </li>
          <li className="item-social">
            <a href="">
              <i className="ri-linkedin-box-fill"></i>
            </a>
          </li>
          <li className="item-social">
            <a href="">
              <i className="ri-skype-fill"></i>
            </a>
          </li>
        </ul>

        <button className="btn navigation-button">
          <i className="ri-arrow-down-circle-line"></i> Scroll
        </button>
      </section>

      <section className="section section-about">

        <div className="image-about">

          <Image src={imageAbout} alt="" />
        </div>
        <div className="content-about">
          <h2 className="title-section">About Me</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus rem eos aliquid quo rerum temporibus ipsum distinctio
            numquam ut omnis placeat, nam sint atque quos dolorem laborum?
            Rerum, esse dolorem.
          </p>

          <button className="btn"> Download CV</button>
        </div>
      </section>
    </main>
  );
}
