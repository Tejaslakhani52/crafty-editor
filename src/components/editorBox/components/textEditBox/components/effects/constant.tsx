import BackgroundEffect from "./components/BackgroundEffect";
import CurveEffect from "./components/CurveEffect";
import EchoEffect from "./components/EchoEffect";
import GlitchEffect from "./components/GlitchEffect";
import HollowEffect from "./components/HollowEffect";
import LiftEffects from "./components/LiftEffects";
import NeonEffect from "./components/NeonEffect";
import OutlineEffect from "./components/OutlineEffect";
import ShadowEffects from "./components/ShadowEffects";
import SpliceEffects from "./components/SpliceEffect";

export const effectsData = [
  {
    title: "Style",
    data: [
      {
        image: "./images/effects/none.png",
        name: "None",
        position: "0",
      },
      { image: "./images/effects/shadow.png", name: "Shadow", position: "1" },
      {
        image: "./images/effects/lift.png",
        name: "Lift",
        position: "1",
      },
      { animation: "1" },
      { image: "./images/effects/hollow.png", name: "Hollow", position: "2" },
      {
        image: "./images/effects/splice.png",
        name: "Splice",
        position: "2",
      },
      {
        image: "./images/effects/outline.png",
        name: "Outline",
        position: "2",
      },
      { animation: "2" },
      {
        image: "./images/effects/echo.png",
        name: "Echo",
        position: "3",
      },
      {
        image: "./images/effects/glitch.png",
        name: "Glitch",
        position: "3",
      },
      {
        image: "./images/effects/neon.png",
        name: "Neon",
        position: "3",
      },
      { animation: "3" },
      {
        image: "./images/effects/background.png",
        name: "Background",
        position: "4",
      },
      { animation: "4" },
    ],
  },
];

export const effectsShapeData = [
  {
    title: "Shape",
    data: [
      {
        image: "./images/effects/Shape None.png",
        name: "None",
        position: "0",
      },

      {
        image: "./images/effects/curve.png",
        name: "Curve",
        position: "5",
      },
      { animation: "5" },
    ],
  },
];

export const effectsComponents: any = {
  Shadow: <ShadowEffects />,
  Lift: <LiftEffects />,
  Hollow: <HollowEffect />,
  Splice: <SpliceEffects />,
  Outline: <OutlineEffect />,
  Echo: <EchoEffect />,
  Glitch: <GlitchEffect />,
  Neon: <NeonEffect />,
  Background: <BackgroundEffect />,
};

export const effectsShapeComponents: any = {
  Curve: <CurveEffect />,
};
