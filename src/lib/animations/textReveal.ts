import gsap from 'gsap';

export function textReveal(
  x: gsap.TweenTarget,
  { duration = 0.6, delay = 0.8, stagger = 0.6 } = {}
) {
  if (!x) return;
  gsap.set(x, { yPercent: 100 });
  // Animate characters into view with a stagger effect
  return gsap.to(x, {
    yPercent: 0,
    duration,
    delay,
    easing: 'power3.out',
    stagger: {
      amount: stagger
    }
  });
}
