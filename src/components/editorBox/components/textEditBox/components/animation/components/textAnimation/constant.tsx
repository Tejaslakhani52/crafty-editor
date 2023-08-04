export const textAnimationData = [
  {
    title: "Basic",
    data: [
      {
        image: "./images/Text Animation/Rise.png",
        name: "Rise",
        position: "1",
      },
      { image: "./images/Text Animation/Pan.png", name: "Pan", position: "1" },
      {
        image: "./images/Text Animation/Fade.png",
        name: "Fade",
        position: "1",
      },
      { animation: "1" },
      { image: "./images/Text Animation/Pop.png", name: "Pop", position: "2" },
      {
        image: "./images/Text Animation/Wipe.png",
        name: "Wipe",
        position: "2",
      },
      {
        image: "./images/Text Animation/Breathe.png",
        name: "Breathe",
        position: "2",
      },
      { animation: "2" },
      {
        image: "./images/Text Animation/Baseline.png",
        name: "Baseline",
        position: "3",
      },
      {
        image: "./images/Text Animation/Drift.png",
        name: "Drift",
        position: "3",
      },
      {
        image: "./images/Text Animation/Tectonic.png",
        name: "Tectonic",
        position: "3",
      },
      { animation: "3" },
    ],
  },
  {
    title: "Writing",
    data: [
      {
        image: "./images/Text Animation/Typewriter.png",
        name: "Typewriter",
        position: "4",
      },
      {
        image: "./images/Text Animation/Ascend.png",
        name: "Ascend",
        position: "4",
      },
      {
        image: "./images/Text Animation/Shift.png",
        name: "Shift",
        position: "4",
      },
      { animation: "4" },
      {
        image: "./images/Text Animation/Merge.png",
        name: "Merge",
        position: "5",
      },
      {
        image: "./images/Text Animation/Block.png",
        name: "Block",
        position: "5",
      },
      {
        image: "./images/Text Animation/Brust.png",
        name: "Brust",
        position: "5",
      },
      { animation: "5" },
      {
        image: "./images/Text Animation/Bounce.png",
        name: "Bounce",
        position: "6",
      },
      {
        image: "./images/Text Animation/Roll.png",
        name: "Roll",
        position: "6",
      },
      {
        image: "./images/Text Animation/Sckate.png",
        name: "Skate",
        position: "6",
      },
      { animation: "6" },
      {
        image: "./images/Text Animation/Spread.png",
        name: "Spread",
        position: "7",
      },
      { animation: "7" },
    ],
  },
  {
    title: "Exaggerate",
    data: [
      {
        image: "./images/Text Animation/Tumble.png",
        name: "Tumble",
        position: "8",
      },
      {
        image: "./images/Text Animation/Neon.png",
        name: "Neon",
        position: "8",
      },
      {
        image: "./images/Text Animation/Scrapbook.png",
        name: "Scrapbook",
        position: "8",
      },
      { animation: "8" },
      {
        image: "./images/Text Animation/Stomp.png",
        name: "Stomp",
        position: "9",
      },
      { animation: "9" },
    ],
  },
];

import AscendAnimation from "../commonComponents/AscendAnimation";
import BaselineAnimation from "../commonComponents/BaselineAnimation";
import BlockAnimation from "../commonComponents/BlockAnimation";
import BounceAnimation from "../commonComponents/BounceAnimation";
import BreathAnimation from "../commonComponents/BreathAnimation";
import BrustAnimation from "../commonComponents/BrustAnimation";
import DriftAnimation from "../commonComponents/DriftAnimation";
import FadeAnimation from "../commonComponents/FadeAnimation";
import MergeAnimation from "../commonComponents/MergeAnimation";
import NeonAnimation from "../commonComponents/NeonAnimation";
import PanAnimation from "../commonComponents/PanAnimation";
import PopAnimation from "../commonComponents/PopAnimation";
import RiseAnimation from "../commonComponents/RiseAnimation";
import RollAnimation from "../commonComponents/RollAnimation";
import SckateAnimation from "../commonComponents/SckateAnimation";
import ScrapbookAnimation from "../commonComponents/ScrapbookAnimation";
import ShiftAnimation from "../commonComponents/ShiftAnimation";
import SpreadAnimation from "../commonComponents/SpreadAnimation";
import StompAnimation from "../commonComponents/StompAnimation";
import TectonicAnimation from "../commonComponents/TectonicAnimation";
import TumbleAnimation from "../commonComponents/TumbleAnimation";
import TypewriterAnimation from "../commonComponents/TypewriterAnimation";
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
  Typewriter: <TypewriterAnimation />,
  Ascend: <AscendAnimation />,
  Shift: <ShiftAnimation />,
  Merge: <MergeAnimation />,
  Block: <BlockAnimation />,
  Brust: <BrustAnimation />,
  Bounce: <BounceAnimation />,
  Roll: <RollAnimation />,
  Sckate: <SckateAnimation />,
  Spread: <SpreadAnimation />,
  Tumble: <TumbleAnimation />,
  Neon: <NeonAnimation />,
  Scrapbook: <ScrapbookAnimation />,
  Stomp: <StompAnimation />,
};
