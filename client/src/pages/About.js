import React, { useRef, useEffect, useState } from "react";
import classes from "./About.module.css";
import IconButton from "@mui/material/IconButton";
import YouTubeIcon from "@mui/icons-material/YouTube";

const About = () => {
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
          console.log("현재 1페이지, down");
          wrapperDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth"
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, down");
          wrapperDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth"
          });
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          // 현재 3페이지
          console.log("현재 3페이지, down");
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
          console.log("현재 1페이지, up");
          wrapperDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, up");
          wrapperDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          // 현재 3페이지
          console.log("현재 3페이지, up");
          wrapperDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth"
          });
        } else if (scrollTop >= pageHeight * 3 && scrollTop < pageHeight * 4){
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
    <div ref={wrapperDivRef} className={classes.about_wrapper}>
      <div className={classes.bg_beige}>
        <div className={classes.bg_beige_text}>
          <p className={classes.section1}>
            Hi, this is <strong>Chloe</strong> again.
          </p>
          <p className={classes.section2}>내 이야기 조금 더 들어볼래?</p>
        </div>
        <div className={classes.img_container}>
          <img
            style={{ transform: imgTransform, transition: ".5s" }}
            className={classes.img1}
            src="chloe.svg"
            alt="Chloe SVG"
          />
        </div>
      </div>
      <div className="divider"></div>
      <div className={classes.bg_yellow}>
        <div>
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
          <p className={classes.section2}>
            1997년 대전에서 태어났어. 이명연이라는 이름과 함께. <br />
            밝고 아름답다는 뜻이야.
            <br />
            아빠가 태어난 나를 보고 생각한 이름이래.
            <br />
            유니크하고 부르기도 어려운 이름이지만, 난 내 한국 이름이 참 좋아.
            <br />
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
          <p className={classes.section2}>
            나는 서울에 있는 서강대에 입학했어 <br />
            Be proud to be part of Sogang <br />
            as Sogang is proud of being part of you. <br />
            This is my univ's slogan. <br />I think I'm pretty proud to be part
            of Sogang.
          </p>
        </div>
      </div>
      <div className={classes.bg_purple}>
        <div>
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
          <p className={classes.section2}>
            나는 대학 밴드 동아리와 뮤지컬 동아리를 시작했어
            <br />
            음악과 무대가 너무 좋았거든
            <br />
            밤을 새워 함께 만들어가던 무대에 설때면 가슴이 벅차게 행복했어
            <br />
            그들의 열정이 내 가슴을 뛰게했어
            <br />
            그리운 우리 크루, 보고싶다
          </p>
          <p className={classes.section4}>
            우리의 활동은 계속되고 있어

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
          alt="Musical gif"
        />
        </div>
            <div className={classes.bg_orange_text}>
              <p className={classes.section3}>
                졸업 전, 아르바이트해서 번 돈을 챙겨 무작정 유럽으로 떠났어.
                100일동안.
                <br />
                {/* 걷고 또 걸었던 기억이 나<br/> */}
                가장 기억에 남는 건 파리의 미쉘린 레스토랑이나 근사한 궁전이
                아닌
                <br />
                목적지 없이 탔던 런던의 버스 안에서 보았던 풍경이나,
                <br />
                길을 잃어 추위에 떨다가 우연히 다다른 곳에서 발견한 카페 같은
                것이었어. 참 웃기지?
                <br />
                근데 사실 우리 인생도 이런 것이 아닐까?
              </p>
              <img
              className={classes.img10}
              src={require("../assets/europe10.jpeg")}
              alt="Musical gif"
            />
        </div>
      </div>
      <div className={classes.bg_navy}>
        <div className={classes.bg_navy_text}>
        <img
            className={classes.img11}
            src={require("../assets/california.jpeg")}
            alt="Chloe california"
          />
          <p className={classes.section2}>그리고 난 지금 여기, California에 와있어.<br/>내 다음 여정을 함께해보지 않을래?</p>
        </div>
        <div>
          Contact Me
        </div>
      </div>
    </div>
  );
};

export default About;
