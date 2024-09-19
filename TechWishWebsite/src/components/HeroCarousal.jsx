import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hero from "../images/hero.png";

export default function HeroCarousal({blocksr}) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (!blocksr) return;
    const id = setInterval(() => {
      setCounter((c) => {
        return c + 1;
      });
    }, 4000);
    return () => clearInterval(id);
  }, [blocksr]);

  let slides = [];
  let index = 0;
  try {
    slides = JSON.parse(
      blocksr.find((e) => e.blockName === "tw-blocks/hero-carousal").attrs
        .slides
    );
    index = counter % slides.length;
  } catch (error) {
    // console.error(error);
  }

  // return <pre style={{ color: "white" }}>{JSON.stringify(blocksr, null, 2)}</pre>;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0)" }}
      transition={{ duration: 0.5 }}
      style={{ width: "100vw", display: "grid", gridTemplateAreas: "main" }}
    >
      <img src={hero.src} style={{ width: "100%", gridArea: "main" }}></img>
      {slides[0] && (
        <div style={{ gridArea: "main" }}>
          <AnimatePresence>
            <motion.h1
              key={"h1" + counter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                color: "white",
                marginLeft: "100px",
                marginTop: "100px",
              }}
            >
              {slides[index].title}
            </motion.h1>
            <motion.h2
              key={"h2" + counter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              style={{
                color: "#aaa",
                marginLeft: "100px",
                fontWeight: "100",
                fontSize: "1.2rem",
              }}
            >
              {slides[index].subTitle}
            </motion.h2>
            <motion.a
              key={"a" + counter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              style={{
                color: "cyan",
                marginLeft: "100px",
                marginTop: "20px",
                fontWeight: "200",
                fontSize: "0.8rem",
                textDecoration: "none",
                display: "block",
              }}
              href="example.com"
            >
              {slides[index].linkText}
            </motion.a>
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
}
