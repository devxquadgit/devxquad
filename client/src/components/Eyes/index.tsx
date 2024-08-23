import React, { useEffect, useState, useCallback } from 'react';
import styled from '@emotion/styled';

const EyeContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

const Border = styled.div`
  height: 1.2rem;
  width: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid #64748b;
`;

const Aww = styled.div`
  width: 10px;
  background: black;
  height: 4px;
  border-radius: 2px;
  transition: transform 0.4s ease-out, width 0.2s, height 0.2s;
`;

const Eye = styled.div<{ x: number; y: number }>`
  height: 8px;
  width: 8px;
  background: black;
  border-radius: 50%;
  transform: ${({ x, y }) => `translate(${x}px, ${y}px)`};
  transition: transform 0.1s ease-out, width 0.2s, height 0.2s;
`;


const index: React.FC = () => {
  const [isAwake, setIsAwake] = useState(false);
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

  const moveEyes = useCallback((event: MouseEvent) => {
    const eyes = document.querySelectorAll('.eye') as NodeListOf<HTMLDivElement>;
    eyes.forEach(eye => {
      const eyeRect = eye.getBoundingClientRect();
      const eyeX = eyeRect.left + eyeRect.width / 2;
      const eyeY = eyeRect.top + eyeRect.height / 2;

      const angle = Math.atan2(event.clientY - eyeY, event.clientX - eyeX);
      const moveX = Math.cos(angle) * 5;
      const moveY = Math.sin(angle) * 5;

      setEyePosition({ x: moveX, y: moveY });
    });
  }, []);

  useEffect(() => {
    let idleTimer: ReturnType<typeof setTimeout>;

    const resetIdleTimer = () => {
      clearTimeout(idleTimer);
      setIsAwake(true);
      document.addEventListener('mousemove', moveEyes);

      idleTimer = setTimeout(() => {
        setIsAwake(false);
        document.removeEventListener('mousemove', moveEyes);
      }, 5000);
    };

    document.addEventListener('mousemove', resetIdleTimer);

    setIsAwake(false);

    resetIdleTimer();

    return () => {
      document.removeEventListener('mousemove', resetIdleTimer);
    };
  }, [moveEyes]);

  return (
    <EyeContainer>
      <Border>
        {isAwake ? (
          <Eye className="eye" x={eyePosition.x} y={eyePosition.y} />
        ) : (
          <Aww />
        )}
      </Border>
      <Border>
        {isAwake ? (
          <Eye className="eye" x={eyePosition.x} y={eyePosition.y} />
        ) : (
          <Aww />
        )}
      </Border>
    </EyeContainer>
  );
};

export default index;
