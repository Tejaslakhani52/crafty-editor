import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import EditorBox from "@/components/editorBox/EditorBox";
import GridView from "@/components/editorBox/components/gridView/GridView";
import { useSelector } from "react-redux";

export default function Home({
  pageSizeValue,
  editorFullscreen,
  setPageSizeValue,
}: any) {
  const pannelbar = useSelector((state: any) => state.data.pannelbar);
  const databar = useSelector((state: any) => state.data.databar);
  const openGridView = useSelector((state: any) => state.data.gridView);

  return (
    <div style={{ width: "100%", paddingLeft: "10px" }}>
      <div className="editorbox" style={{ width: "100%" }}>
        {openGridView ? (
          <GridView />
        ) : (
          <EditorBox
            pageSizeValue={pageSizeValue}
            editorFullscreen={editorFullscreen}
            setPageSizeValue={setPageSizeValue}
          />
        )}
      </div>
    </div>
  );
}
