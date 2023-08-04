export const photoAnimationData = [
  {
    title: "Basic",
    data: [
      {
        image: "./images/Image Animation/Rise.png",
        name: "Rise",
        position: "1",
      },
      { image: "./images/Image Animation/Pan.png", name: "Pan", position: "1" },
      {
        image: "./images/Image Animation/Fade.png",
        name: "Fade",
        position: "1",
      },
      { animation: "1" },
      { image: "./images/Image Animation/Pop.png", name: "Pop", position: "2" },
      {
        image: "./images/Image Animation/Wipe.png",
        name: "Wipe",
        position: "2",
      },
      {
        image: "./images/Image Animation/Breathe.png",
        name: "Breathe",
        position: "2",
      },
      { animation: "2" },
      {
        image: "./images/Image Animation/Baseline.png",
        name: "Baseline",
        position: "3",
      },
      {
        image: "./images/Image Animation/Drift.png",
        name: "Drift",
        position: "3",
      },
      {
        image: "./images/Image Animation/Tectonic.png",
        name: "Tectonic",
        position: "3",
      },
      { animation: "3" },
    ],
  },

  {
    title: "Exaggerate",
    data: [
      {
        image: "./images/Image Animation/Tumble.png",
        name: "Tumble",
        position: "8",
      },
      {
        image: "./images/Image Animation/Neon.png",
        name: "Neon",
        position: "8",
      },
      {
        image: "./images/Image Animation/Scrapbook.png",
        name: "Scrapbook",
        position: "8",
      },
      { animation: "8" },
      {
        image: "./images/Image Animation/Stomp.png",
        name: "Stomp",
        position: "9",
      },
      { animation: "9" },
    ],
  },
  {
    title: "Photo Movement",
    data: [
      {
        image: "./images/Image Animation/Photo Flow.png",
        name: "Photo Flow",
        position: "10",
      },
      {
        image: "./images/Image Animation/Photo Rise.png",
        name: "Photo Rise",
        position: "10",
      },
      {
        image: "./images/Image Animation/Photo Zoom.png",
        name: "Photo Zoom",
        position: "10",
      },
      { animation: "10" },
    ],
  },
];

import BaselineAnimation from "../commonComponents/BaselineAnimation";
import BreathAnimation from "../commonComponents/BreathAnimation";
import DriftAnimation from "../commonComponents/DriftAnimation";
import FadeAnimation from "../commonComponents/FadeAnimation";
import NeonAnimation from "../commonComponents/NeonAnimation";
import PanAnimation from "../commonComponents/PanAnimation";
import PhotoFlowAnimation from "../commonComponents/PhotoFlowAnimation";
import PhotoRiseAnimation from "../commonComponents/PhotoRiseAnimation";
import PhotoZoomAnimation from "../commonComponents/PhotoZoomAnimation";
import PopAnimation from "../commonComponents/PopAnimation";
import RiseAnimation from "../commonComponents/RiseAnimation";
import ScrapbookAnimation from "../commonComponents/ScrapbookAnimation";
import StompAnimation from "../commonComponents/StompAnimation";
import TectonicAnimation from "../commonComponents/TectonicAnimation";
import TumbleAnimation from "../commonComponents/TumbleAnimation";
import WipeAnimation from "../commonComponents/WipeAnimation";

export const basicAnimation: any = {
  Rise: <RiseAnimation />,
  Pan: <PanAnimation />,
  Fade: <FadeAnimation />,
  Pop: <PopAnimation />,
  Wipe: <WipeAnimation />,
  Breathe: <BreathAnimation />,
  Baseline: <BaselineAnimation />,
  Drift: <DriftAnimation />,
  Tectonic: <TectonicAnimation />,
  Tumble: <TumbleAnimation />,
  Neon: <NeonAnimation />,
  Scrapbook: <ScrapbookAnimation />,
  Stomp: <StompAnimation />,
  "Photo Flow": <PhotoFlowAnimation />,
  "Photo Rise": <PhotoRiseAnimation />,
  "Photo Zoom": <PhotoZoomAnimation />,
};
