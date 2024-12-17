"use client";
import { useScroll, animated, useSpring } from "@react-spring/web";

const Scroll: React.FC = () => {
  const [props, api] = useSpring(() => ({
    width: "0%",
  }));
  const { scrollY, scrollYProgress } = useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      console.log(scrollYProgress);
      api.start({ width: scrollYProgress * 100 + "%" });
    },
  });

  // scrollYProgress
  // 0: 스크롤이 움직이지 않은 상태
  // 1: 스크롤이 최대로 움직인 상태

  // scrollY
  // 스크롤이 실제로 움직인 거리
  return (
    <div className="w-full h-[2000px] flex justify-center items-center">
      <animated.div
        style={{ width: props.width }}
        className="h-5 bg-pink-400 fixed top-0 left-0"
      ></animated.div>
      <div className="flex flex-col space-y-6 fixed top-5">
        <animated.span>{scrollY.to((v) => v.toFixed(0))}</animated.span>
        <animated.span>{scrollYProgress.to((v) => v.toFixed(2))}</animated.span>
      </div>
    </div>
  );
};

export default Scroll;
