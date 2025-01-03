import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieControl = ({ animationData, width }) => {
  const animBox = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animBox.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
    return () => {
      anim.destroy();
    };
  }, [animationData]);

  return (
    <div
      style={{
        width: width ? width : '100%',
        margin: '0 auto',
      }}
      ref={animBox}
    ></div>
  );
};

export default LottieControl;
