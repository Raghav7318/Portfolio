import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

function SoundToggle() {
  const [enabled, setEnabled] = useState(false);
  const [supported, setSupported] = useState(true);
  const contextRef = useRef(null);

  useEffect(() => {
    if (!window.AudioContext && !window.webkitAudioContext) {
      setSupported(false);
    }
  }, []);

  const vibrate = () => {
    if (navigator.vibrate) {
      navigator.vibrate([15, 10, 15]);
    }
  };

  const beep = async () => {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;

    if (!contextRef.current) {
      contextRef.current = new AudioCtx();
    }

    const ctx = contextRef.current;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.value = 800;
    gain.gain.value = 0;

    osc.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;
    gain.gain.linearRampToValueAtTime(0.3, now + 0.05);
    gain.gain.linearRampToValueAtTime(0, now + 0.2);

    osc.start(now);
    osc.stop(now + 0.2);
  };

  const handleToggle = async () => {
    setEnabled((prev) => !prev);
    vibrate();
    await beep();
  };

  if (!supported) {
    return null;
  }

  return (
    <button
      onClick={handleToggle}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-slate-100 transition hover:border-cyan-300/70 hover:text-cyan-200"
      aria-label="Toggle subtle sound effects"
      title="Toggle subtle sound effects"
    >
      {enabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
    </button>
  );
}

export default SoundToggle;
