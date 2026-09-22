// Web Audio API synthesized forest soundscape (nature breeze & gentle distant birds)
// 100% self-contained, zero external network requests

class NatureAmbientPlayer {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private noiseNode: AudioNode | null = null;
  private birdInterval: number | null = null;

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getPlaying(): boolean {
    return this.isPlaying;
  }

  public start() {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.01, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.18, this.ctx.currentTime + 3);
      this.masterGain.connect(this.ctx.destination);

      // Pink noise generator for gentle wind / tree canopy breeze
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
        output[i] *= 0.04;
        b6 = white * 0.115926;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Filter to shape wind sound through trees
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, this.ctx.currentTime);

      whiteNoise.connect(filter);
      filter.connect(this.masterGain);
      whiteNoise.start();
      this.noiseNode = whiteNoise;

      // Occasional gentle bird chirp synthesizer
      this.birdInterval = window.setInterval(() => {
        if (!this.ctx || !this.masterGain || this.ctx.state !== 'running') return;
        this.playGentleChirp();
      }, 4000);

      this.isPlaying = true;
    } catch {
      this.isPlaying = false;
    }
  }

  private playGentleChirp() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const chirpGain = this.ctx.createGain();

    osc.type = 'sine';
    const baseFreq = 2200 + Math.random() * 800;
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq + 600, now + 0.08);
    osc.frequency.exponentialRampToValueAtTime(baseFreq - 300, now + 0.18);

    chirpGain.gain.setValueAtTime(0.001, now);
    chirpGain.gain.exponentialRampToValueAtTime(0.04, now + 0.05);
    chirpGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

    osc.connect(chirpGain);
    chirpGain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.25);
  }

  public stop() {
    if (this.birdInterval) {
      clearInterval(this.birdInterval);
      this.birdInterval = null;
    }
    if (this.masterGain && this.ctx) {
      try {
        this.masterGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1);
        setTimeout(() => {
          this.ctx?.close();
          this.ctx = null;
          this.isPlaying = false;
        }, 1000);
      } catch {
        this.ctx?.close();
        this.ctx = null;
        this.isPlaying = false;
      }
    } else {
      this.isPlaying = false;
    }
  }
}

export const natureAudio = new NatureAmbientPlayer();
