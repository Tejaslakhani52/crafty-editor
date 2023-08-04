import Header from "@/components/header/Header";
import "@/styles/globals.css";
import "../styles/common.css";
import "../components/header/header.css";
import "../components/sidebar/sidebar.css";
import "../components/bottombar/bottombar.css";
import "../components/editorBox/editorBox.css";
import "rc-slider/assets/index.css";
import type { AppProps } from "next/app";
import Sidebar from "@/components/sidebar/Pannelbar";
import BottomPannel from "@/components/bottombar/BottomPannel";
import { useEffect, useState } from "react";
import { Provider, useSelector } from "react-redux";
import store from "@/store";
import { useScreenHeight } from "@/commonFunction/screenHeight";
import ReportBox from "@/components/common/ReportBox";

export default function App({ Component, pageProps }: AppProps) {
  const screenHeight = useScreenHeight();
  const [openPannelbar, setOpenPannelbar] = useState<boolean>(false);
  const [openTemplatebar, setOpenTemplatebar] = useState<boolean>(false);
  const [openGridView, setOpenGridView] = useState<boolean>(false);
  const [pageSizeValue, setPageSizeValue] = useState<number>(30);
  const [editorFullscreen, setEditorFullscreen] = useState<any>(false);
  const [designName, setDesignName] = useState<string>(
    "Man with the purple sky"
  );
  const [dataBar, setDataBar] = useState<boolean>(false);

  return (
    <>
      <Provider store={store}>
        <Header designName={designName} setDesignName={setDesignName} />

        <div
          className="main_layout"
          style={{
            height: `${screenHeight - 60}px`,
            padding: "20px 0 20px 20px",
            marginTop: "60px",
          }}
        >
          <Sidebar
            openPannelbar={openPannelbar}
            setOpenPannelbar={setOpenPannelbar}
            setOpenGridView={setOpenGridView}
          />
          <Component
            {...pageProps}
            pageSizeValue={pageSizeValue}
            editorFullscreen={editorFullscreen}
            setPageSizeValue={setPageSizeValue}
          />
          <BottomPannel
            openGridView={openGridView}
            setOpenGridView={setOpenGridView}
            pageSizeValue={pageSizeValue}
            setPageSizeValue={setPageSizeValue}
            editorFullscreen={editorFullscreen}
            setEditorFullscreen={setEditorFullscreen}
          />
        </div>
        <ReportBox />
      </Provider>
    </>
  );
}
