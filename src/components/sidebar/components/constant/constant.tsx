import ColorsText from "@/components/editorBox/components/textEditBox/components/Colors";
import Background from "../pannelbarItems/background/Background";
import Draw from "../pannelbarItems/draw/Draw";
import Elements from "../pannelbarItems/elements/Element";
import Project from "../pannelbarItems/projects/Project";
import BrandKit from "../pannelbarItems/brandKit/BrandKit";
import Templates from "../pannelbarItems/templates/Templates";
import Text from "../pannelbarItems/text/Text";
import Upload from "../pannelbarItems/upload/Upload";
import SelectFontStyle from "@/components/editorBox/components/textEditBox/components/SelectFontStyle";
import Position from "@/components/editorBox/components/textEditBox/components/Position";
import Animation from "@/components/editorBox/components/textEditBox/components/animation/Animation";
import Effects from "@/components/editorBox/components/textEditBox/components/effects/Effects";

export const sidebarMenu = [
  {
    name: "Templates",
    icons: "./icons/pannelbarIcons/Template.svg",
    activeIcons: "./icons/pannelbarActiveIcons/Template.svg",
    path: "/",
    content: <Templates />,
    searchBox: true,
  },
  {
    name: "Elements",
    icons: "./icons/pannelbarIcons/elements.svg",
    activeIcons: "./icons/pannelbarActiveIcons/elements.svg",
    path: "/profile",
    content: <Elements />,
    searchBox: true,
  },

  {
    name: "Brand Kit",
    icons: "./icons/pannelbarIcons/Brand kit.svg",
    activeIcons: "./icons/pannelbarActiveIcons/Brand kit.svg",
    path: "/brandKit",
    content: <BrandKit />,
    searchBox: true,
  },
  {
    name: "Upload",
    icons: "./icons/pannelbarIcons/upload.svg",
    activeIcons: "./icons/pannelbarActiveIcons/upload.svg",

    path: "/contentPlanner",
    content: <Upload />,
    searchBox: true,
  },
  {
    name: "Text",
    icons: "./icons/pannelbarIcons/Text.svg",
    activeIcons: "./icons/pannelbarActiveIcons/Text.svg",
    path: "/schedulePost",
    content: <Text />,
    searchBox: true,
  },
  {
    name: "Image",
    icons: "./icons/pannelbarIcons/image.svg",
    activeIcons: "./icons/pannelbarActiveIcons/image.svg",
    path: "/upload",
    content: <Templates />,
    searchBox: true,
  },
  {
    name: "Video",
    icons: "./icons/pannelbarIcons/Video.svg",
    activeIcons: "./icons/pannelbarActiveIcons/Video.svg",
    path: "/recomendation",
    content: <Templates />,
    searchBox: true,
  },
  {
    name: "Background",
    icons: "./icons/pannelbarIcons/Background.svg",
    activeIcons: "./icons/pannelbarActiveIcons/Background.svg",
    path: "/recomendation",
    content: <Background />,
    searchBox: true,
  },
  {
    name: "Project",
    icons: "./icons/pannelbarIcons/Project.svg",
    activeIcons: "./icons/pannelbarActiveIcons/Project.svg",
    path: "/recomendation",
    content: <Project />,
    searchBox: true,
  },
  {
    name: "Draw",
    icons: "./icons/pannelbarIcons/Draw.svg",
    activeIcons: "./icons/pannelbarActiveIcons/Draw.svg",
    path: "/recomendation",
    content: <Draw />,
    searchBox: false,
  },
  {
    name: "Audio",
    icons: "./icons/pannelbarIcons/Audio.svg",
    activeIcons: "./icons/pannelbarActiveIcons/Audio.svg",
    path: "/recomendation",
    content: <Templates />,
    searchBox: true,
  },
  {
    name: "Layers",
    icons: "./icons/pannelbarIcons/Layer.svg",
    activeIcons: "./icons/pannelbarActiveIcons/Layer.svg",
    path: "/recomendation",
    content: <Templates />,
    searchBox: true,
  },
];

export const databarContent: any = {
  colors: <ColorsText />,
  fontStyle: <SelectFontStyle />,
  position: <Position />,
  animation: <Animation />,
  effect: <Effects />,
};
