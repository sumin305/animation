"use client";

import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
const MotionTest = () => {
  const xMotionValue = useMotionValue(0);

  // useMotionValueEvent vs useTransform
  // useMotionValueEvent -> logging 혹은 다른 처리할 때 사용 (return 값이 없음)
  // useTransform -> useMotionValue 활용해서 변형해서 사용한다.
  const transformedValue = useTransform(
    xMotionValue,
    () => xMotionValue.get() * 0.5
  );

  const transformedValue2 = useTransform(
    xMotionValue,
    [-200, 200], // 위의 값을
    ["#7b2ff7", "#f107a3"] // 아래의 값으로 mapping
    // 색상을 문자열로 나타내면 인식할 수 없음
    // CSS 프로퍼티별로 인식 할 수 있는 타입이 정해져 있음 (색상은 RGB로 해야 중간값 반영 가능)
  );

  // motion event에 따라 동작한다.
  // 어떤 변수에 대해 콜백핫무 실행? 어떤 event에 대해 콜백함수 실행? 콜백함수
  useMotionValueEvent(xMotionValue, "change", (latestValue) => {
    console.log(latestValue);
  });

  // useTransform 예제
  // 2배 주기
  // useTransform(() => x.get() * 2);

  // 특정 범위일 때 mapping
  // useTransform(() => [-100,0,000], ["#f00", "f00"]);

  return (
    <motion.div
      style={{
        x: xMotionValue, // 값 초기회: x축에 대해서 Motion component가 가지는 Motion value 초기화
        backgroundColor: transformedValue2,
      }}
      drag="x"
      className="px-4 py-2 rounded-md bg-blue-400"
    >
      {"Hello"}
    </motion.div>
  );
};

export default MotionTest;
