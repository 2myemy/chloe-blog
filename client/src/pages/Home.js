import React, { useRef, useEffect } from "react";
import classes from "./Home.module.css";
import IconButton from "@mui/material/IconButton";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SouthIcon from "@mui/icons-material/South";

const Home = () => {
  const [imgTransform, setImgTransform] = React.useState("");
  const [imgTransition, setImgTransition] = React.useState("");
  const wrapperDivRef = useRef();

  useEffect(() => {
    const wheelHandler = e => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = wrapperDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.
      const DIVIDER_HEIGHT = 5;

      if (deltaY > 0) {
        setImgTransform("scale(1.8)");
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          wrapperDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth"
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          wrapperDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth"
          });
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          // 현재 3페이지
          wrapperDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: "smooth"
          });
        } else if (scrollTop >= pageHeight * 3 && scrollTop < pageHeight * 4) {
          wrapperDivRef.current.scrollTo({
            top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
            left: 0,
            behavior: "smooth"
          });
        } else {
          wrapperDivRef.current.scrollTo({
            top: pageHeight * 5 + DIVIDER_HEIGHT * 5,
            left: 0,
            behavior: "smooth"
          });
        }
      } else {
        // 스크롤 올릴 때
        setImgTransform("scale(1)");
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          wrapperDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          wrapperDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          // 현재 3페이지
          wrapperDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth"
          });
        } else if (scrollTop >= pageHeight * 3 && scrollTop < pageHeight * 4) {
          wrapperDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth"
          });
        } else if (scrollTop >= pageHeight * 4 && scrollTop < pageHeight * 5) {
          wrapperDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: "smooth"
          });
        } else {
          wrapperDivRef.current.scrollTo({
            top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
            left: 0,
            behavior: "smooth"
          });
        }
      }
    };
    const wrapperDivRefCurrent = wrapperDivRef.current;
    wrapperDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      wrapperDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <div>
      <div ref={wrapperDivRef} className={classes.about_wrapper}>
        <div className={classes.bg_beige}>
          <div className={classes.info}>
            <div className={classes.img_container}>
              <img
                className={classes.chloe_img}
                src={require("../assets/chloelee.png")}
                alt="Chloe"
              />
            </div>
            <p className={classes.greeting}>
              Hey there, I'm <strong>Chloe!</strong>
            </p>
            <p className={classes.introduction}>
              I'm a web developer who loves to create beautiful websites.
              <br />I can use React.js, Angular, Vue for front-end framework.
              <br />
              I'm so excited to take on new projects with you!
            </p>
            <div>
              <IconButton
                aria-label="Resume"
                onClick={() => {
                  window.open(`./Myungyeon_Chloe_Lee_Resume.pdf`);
                }}
              >
                <AssignmentIndIcon />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                onClick={() => {
                  window.open("https://www.linkedin.com/in/the-chloest/");
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                aria-label="YouTuve"
                onClick={() => {
                  window.open("https://www.youtube.com/@jocaldaek");
                }}
              >
                <YouTubeIcon />
              </IconButton>
            </div>
          </div>
          <div className={classes.more}>
            A bit more about me
            <br />
            <SouthIcon></SouthIcon>
          </div>
        </div>
        <div className="divider"></div>
        <div className={classes.bg_yellow}>
          <div  className={classes.bg_yellow_imgs}>
            <img
              className={classes.img3}
              src={require("../assets/childhood2.jpeg")}
              alt="Chloe childhood picture"
            />
            <img
              className={classes.img2}
              src={require("../assets/childhood.jpeg")}
              alt="Chloe childhood picture"
            />
            <img
              className={classes.img4}
              src={require("../assets/childhood3.jpeg")}
              alt="Chloe childhood picture"
            />
          </div>
          <div className={classes.bg_yellow_text}>
            <p className={classes.section1}>
              I was born in Daejeon, South Korea in 1997 with the name of
              Myungyeon Lee. <br />
              It means bright and beautiful.
              <br />
              My dad thought of this name, as soon as I was born and he saw me.
              <br />
              It's a unique and difficult name to pronounce, but I love my name
              <br />
              because I can feel that I'm loved when I hear my name.
            </p>
          </div>
        </div>
        <div className="divider"></div>
        <div className={classes.bg_blue}>
          <div>
            <img
              className={classes.img5}
              src={require("../assets/sogang.png")}
              alt="Sogang univ picture"
            />
            <img
              className={classes.img6}
              src={require("../assets/sogang_logo.jpeg")}
              alt="Sogang logo"
            />
          </div>
          <div className={classes.bg_blue_text}>
            <p className={classes.section1}>
              When I turned 18, I entered Sogang University in Seoul.
              <br />
              "Be proud to be part of Sogang as Sogang is proud of being part of
              you."
              <br />
              This is my university's slogan. <br />I think I'm pretty proud to be
              part of Sogang.
            </p>
          </div>
        </div>
        <div className={classes.bg_purple}>
          <div className={classes.bg_purple_imgs}>
            <img
              className={classes.img7}
              src={require("../assets/band1.jpeg")}
              alt="band"
            />
            <img
              className={classes.img8}
              src={require("../assets/nexttonormal.gif")}
              alt="Musical gif"
            />
            {/* <img
        className={classes.img7}
        src={require("../assets/band2.jpeg")}
        alt="band"
      /> */}
          </div>
          <div className={classes.bg_purple_text}>
            <p className={classes.section1}>
              I started a college band club and a musical club <br/>
              because I loved music and the stage.
              <br />
              I was so happy when I was perfoming on the stage that we made
              together all night.
              <br />
              Their passion made my heart beat.
              <br />
              Miss you, my crew.
            </p>
            <p className={classes.section2}>
              My crew's activities are continuing
              <IconButton
                aria-label="YouTuve"
                onClick={() => {
                  window.open("https://www.youtube.com/@user-eb1gi4by1n");
                }}
              >
                <YouTubeIcon />
              </IconButton>
            </p>
          </div>
        </div>
        <div className={classes.bg_orange}>
          <div>
            <img
              className={classes.img9}
              src={require("../assets/europe11.jpeg")}
              alt="Europe"
            />
          </div>
          <div className={classes.bg_orange_text}>
            <p className={classes.section3}>
              Before graduation, I left for Europe, with money that I earned
              from part-time jobs for 100 days.
              <br />
              {/* 걷고 또 걸었던 기억이 나<br/> */}
              The most memorable thing was not a Michelin restaurant or fancy
              palace in France,
              <br />
              but the scenery I saw on the bus I boarded without a destination
              in London,
              <br />
              or the cafe I stumbled upon while I was lost and shivering in the
              cold.
              <br />
              Isn't it interesting?
              <br />
              But isn't this what our lives are like?
            </p>
            <img
              className={classes.img10}
              src={require("../assets/europe10.jpeg")}
              alt="Europe"
            />
          </div>
        </div>
        <div className={classes.bg_navy}>
          <div className={classes.bg_navy_text}>
            <p className={classes.section4}>
              And now I'm here, <strong>California</strong>.
              <br />
              Why don't you join me on my next journey?
            </p>
          </div>
          <img className={classes.img1} src="chloe.svg" alt="Chloe" />
        </div>
      </div>
    </div>
  );
};

export default Home;
