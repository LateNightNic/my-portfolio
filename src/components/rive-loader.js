// Central Rive initialisation wrapper.
// Always use this function to load Rive animations — never initialise Rive directly in page scripts.

import { Rive, Layout, Fit, Alignment } from '@rive-app/canvas'

export function loadRive({ canvas, src, stateMachine, onReady }) {
  return new Rive({
    src,
    canvas,
    stateMachines: stateMachine,
    layout: new Layout({ fit: Fit.Cover, alignment: Alignment.Center }),
    autoplay: true,
    onLoad: onReady,
  })
}