// Utility to play a sound by file name in /public/sounds
export function playSound(name: string) {
  const audio = new Audio(`/sounds/${name}`);
  audio.currentTime = 0;
  audio.play();
}
