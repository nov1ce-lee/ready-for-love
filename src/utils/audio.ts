import { useRef, useCallback, useEffect } from 'react';

type SoundType = 'flip' | 'draw' | 'reveal' | 'hover';

export const useSound = () => {
  const audioContext = useRef<AudioContext | null>(null);

  useEffect(() => {
    const AudioContextClass = (window.AudioContext || (window as any).webkitAudioContext);
    if (AudioContextClass) {
      audioContext.current = new AudioContextClass();
    }
  }, []);

  const playFlip = useCallback(() => {
    const ctx = audioContext.current;
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume();

    const t = ctx.currentTime;

    const bufferSize = ctx.sampleRate * 0.04;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1200, t);
    filter.Q.setValueAtTime(4, t);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.25, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.08);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start(t);
    noise.stop(t + 0.1);
  }, []);

  const playDraw = useCallback(() => {
    const ctx = audioContext.current;
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume();

    setTimeout(() => playFlip(), 0);
    setTimeout(() => playFlip(), 70);
    setTimeout(() => playFlip(), 140);
  }, [playFlip]);

  const playReveal = useCallback(() => {
    const ctx = audioContext.current;
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume();

    const t = ctx.currentTime;

    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(392, t);
    osc.frequency.linearRampToValueAtTime(524, t + 0.18);

    const osc2 = ctx.createOscillator();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(784, t);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.16, t + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.9);

    const delay = ctx.createDelay();
    delay.delayTime.value = 0.12;
    const delayGain = ctx.createGain();
    delayGain.gain.value = 0.25;

    osc.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);
    gain.connect(delay);
    delay.connect(delayGain);
    delayGain.connect(ctx.destination);

    osc.start(t);
    osc2.start(t);
    osc.stop(t + 1.0);
    osc2.stop(t + 1.0);
  }, []);

  const playHover = useCallback(() => {
  }, []);

  const playSound = (type: SoundType) => {
    switch (type) {
      case 'flip': playFlip(); break;
      case 'draw': playDraw(); break;
      case 'reveal': playReveal(); break;
      case 'hover': playHover(); break;
    }
  };

  return { playSound };
};
