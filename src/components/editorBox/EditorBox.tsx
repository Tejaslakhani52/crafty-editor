// import React, { useEffect, useRef, useState } from "react";
// import { Layer, Rect } from "react-konva";
// import { Stage } from "react-konva";

// export default function EditorBox({
//   openTemplatebar,
//   openPannelbar,
//   pageSizeValue,
//   editorFullscreen,
//   setPageSizeValue,
// }: any) {
//   const stageRef = useRef(null);
//   const width = 500;
//   const height = 500;

//   const [stage, setStage] = useState({
//     scale: 1,
//     x: 50,
//     y: 50,
//   });
//   console.log("stage: ", stage);

//   const scaleRelativeToPoint = (point: any, increaseScale: any) => {
//     const scaleBy = 1.02;
//     const stage: any = stageRef.current;
//     const oldScale = stage.scaleX();
//     const mousePointTo = {
//       x: point.x / oldScale - stage.x() / oldScale,
//       y: point.y / oldScale - stage.y() / oldScale,
//     };

//     const newScale = increaseScale ? oldScale * scaleBy : oldScale / scaleBy;

//     setStage({
//       scale: newScale,
//       x: (point.x / newScale - mousePointTo.x) * newScale,
//       y: (point.y / newScale - mousePointTo.y) * newScale,
//     });
//   };

//   const handleWheel = (e: any) => {
//     e.evt.preventDefault();
//     scaleRelativeToPoint(
//       e.target.getStage().getPointerPosition(),
//       e.evt.deltaY < 0
//     );
//   };

//   return (
//     <>
//       {/* <div className="animate_position_box">
//         <button
//           onClick={() => setActiveBotton("animate")}
//           className={`${activeBotton === "animate" && "active_shadow"}`}
//         >
//           <img src="./icons/animate.svg" alt="" />
//           Animate
//         </button>
//         <div className="col_devider"></div>
//         <button
//           className={`${activeBotton === "position" && "active_shadow"}`}
//           onClick={() => setActiveBotton("position")}
//         >
//           Position
//         </button>
//       </div> */}

//       <div style={{ width: "500px", height: "500px" }}>
//         <Stage
//           width={width}
//           height={height}
//           onWheel={handleWheel}
//           scaleX={stage.scale}
//           scaleY={stage.scale}
//           x={stage.x}
//           y={stage.y}
//           ref={stageRef}
//           style={{
//             overflow: "scroll",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <Layer>
//             <Rect fill="blue" height={200} width={200}></Rect>
//           </Layer>
//         </Stage>
//       </div>
//       {/* </div> */}
//     </>
//   );
// }

// import React, { useEffect, useRef, useState } from "react";

// export default function EditorBox({
//   openTemplatebar,
//   openPannelbar,
//   pageSizeValue,
//   editorFullscreen,
//   setPageSizeValue,
// }: any) {
//   const editorRef = useRef<HTMLDivElement>(null);
//   const editorCanvasRef = useRef<any>(null);
//   const [screenHeight, setScreenHeight] = useState(0);
//   const [screenWidth, setScreenWidth] = useState(0);

//   useEffect(() => {
//     const handleResize = () => {
//       setScreenHeight(window.innerHeight);
//       setScreenWidth(window.innerWidth);
//     };

//     handleResize();

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     const editor: any = editorRef.current;
//     const editorCanvas: any = editorCanvasRef.current;
//     let scale = 0.1;

//     const minScale = 0.1;
//     const maxScale = 8;
//     const scaleStep = 0.001;

//     let ctrlDown = false;
//     let shiftDown = false;
//     let dragging = false;
//     let dragStartX = 0;
//     let dragStartY = 0;
//     let previousScrollLeft = 0;
//     let previousScrollTop = 0;

//     const handleKeyDown = (e: any) => {
//       if (e.key === "Control") {
//         ctrlDown = true;
//         editorCanvas.style.cursor = "move";
//       }
//       if (e.key === "Shift") {
//         shiftDown = true;
//       }
//     };

//     const handleKeyUp = (e: any) => {
//       if (e.key === "Control") {
//         ctrlDown = false;
//         editorCanvas.style.cursor = "default";
//       }
//       if (e.key === "Shift") {
//         shiftDown = false;
//       }
//     };

//     const handleMouseDown = (e: any) => {
//       dragging = true;
//       dragStartX = e.clientX - editor.offsetLeft;
//       dragStartY = e.clientY - editor.offsetTop;
//       previousScrollLeft = editor.scrollLeft;
//       previousScrollTop = editor.scrollTop;
//     };

//     const handleMouseUp = () => {
//       dragging = false;
//     };

//     const handleMouseMove = (e: any) => {
//       if (ctrlDown && dragging) {
//         requestAnimationFrame(() => {
//           let currentX = e.clientX - editor.offsetLeft;
//           let currentY = e.clientY - editor.offsetTop;

//           let scrollX = previousScrollLeft + (dragStartX - currentX);
//           let scrollY = previousScrollTop + (dragStartY - currentY);

//           editor.scroll(scrollX, scrollY);
//         });
//       }
//     };
//     const handleWheel = (e: any) => {
//       e.preventDefault();

//       if (ctrlDown) {
//         scale -= e.deltaY * scaleStep;

//         if (scale < minScale) {
//           scale = minScale;
//         }

//         if (scale > maxScale) {
//           scale = maxScale;
//         }

//         if (scale < 1) {
//           editorCanvas.style.transformOrigin = "50% 50% 0";
//         } else {
//           editorCanvas.style.transformOrigin = "0 0 0";
//         }

//         editorCanvas.style.transform = `matrix(${scale}, 0, 0, ${scale}, 0, 0)`;

//         let rect = editorCanvas.getBoundingClientRect();
//         let ew = rect.width;
//         let eh = rect.height;

//         let mx = (e.clientX - editor.offsetLeft) * (ew / editor.clientWidth);
//         let my = (e.clientY - editor.offsetTop) * (eh / editor.clientHeight);

//         editor.scroll(
//           (ew - editor.offsetWidth) * (mx / ew),
//           (eh - editor.offsetHeight) * (my / eh)
//         );
//       } else if (shiftDown) {
//         editor.scrollLeft += e.deltaY;
//       } else {
//         editor.scrollTop += e.deltaY;
//         editor.scrollLeft += e.deltaX;
//       }
//     };
//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("keyup", handleKeyUp);
//     editor.addEventListener("mousedown", handleMouseDown);
//     editor.addEventListener("mouseup", handleMouseUp);
//     editor.addEventListener("mousemove", handleMouseMove);
//     editor.addEventListener("wheel", handleWheel, { passive: false });

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("keyup", handleKeyUp);
//       editor.removeEventListener("mousedown", handleMouseDown);
//       editor.removeEventListener("mouseup", handleMouseUp);
//       editor.removeEventListener("mousemove", handleMouseMove);
//       editor.removeEventListener("wheel", handleWheel);
//     };
//   }, []);

//   const [activeBotton, setActiveBotton] = useState<string>("");
//   // const [screenHeight, setScreenHeight] = useState(0);
//   // const [screenWidth, setScreenWidth] = useState(0);
//   console.log("screenWidth: ", screenWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setScreenHeight(window.innerHeight);
//       setScreenWidth(window.innerWidth);
//     };

//     handleResize();

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   const scrollContainerRef = useRef(null);

//   return (
//     <>
//       <div className="animate_position_box">
//         <button
//           onClick={() => setActiveBotton("animate")}
//           className={`${activeBotton === "animate" && "active_shadow"}`}
//         >
//           <img src="./icons/animate.svg" alt="" />
//           Animate
//         </button>
//         <div className="col_devider"></div>
//         <button
//           className={`${activeBotton === "position" && "active_shadow"}`}
//           onClick={() => setActiveBotton("position")}
//         >
//           Position
//         </button>
//       </div>
//       <div
//         id="editor"
//         ref={editorRef}
//         style={{
//           width: `${screenWidth - (openPannelbar ? 477 : 125)}px`,
//           height: `${screenHeight - (openTemplatebar ? 329 : 218)}px`,
//           display: "flex",
//         }}
//       >
//         <canvas
//           ref={editorCanvasRef}
//           style={{
//             // backgroundColor: "white",
//             backgroundImage: "url(./images/editImage.svg)",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//             position: "relative",
//             width: "100%",
//             height: "100%",
//             transform: "matrix(0.4, 0, 0, 0.4, 0, 0)",
//           }}
//         ></canvas>
//         {/* <div className="canvas" ref={editorCanvasRef}></div> */}
//       </div>
//     </>
//   );
// }

// import React, { useEffect, useRef, useState } from "react";

// export default function EditorBox({
//   openTemplatebar,
//   openPannelbar,
//   pageSizeValue,
//   editorFullscreen,
//   setPageSizeValue,
// }: any) {
//   console.log("pageSizeValue: ", pageSizeValue);
//   const parentRef = useRef(null);
//   const canvasRef = useRef(null);
//   const [canvasHeight, setCanvasHeight] = useState<number>(200);
//   const [canvasWidth, setCanvasWidth] = useState<number>(200);
//   const [divSize, setDivSize] = useState(Number(pageSizeValue));
//   console.log("divSize: ", divSize);

//   const [activeBotton, setActiveBotton] = useState<string>("");
//   const [screenHeight, setScreenHeight] = useState(0);
//   const [screenWidth, setScreenWidth] = useState(0);
//   console.log("screenWidth: ", screenWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setScreenHeight(window.innerHeight);
//       setScreenWidth(window.innerWidth);
//     };

//     handleResize();

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   const scrollContainerRef = useRef(null);

//   const containerRef: any = useRef(null);

//   useEffect(() => {
//     const container: any = containerRef.current;
//     const canvas: any = canvasRef.current;
//     const context = canvas.getContext("2d");
//     let scale = 1.0;

//     const handleWheel = (event: any) => {
//       if (event.ctrlKey) {
//         event.preventDefault();
//         const delta = event.deltaY;

//         const zoomFactor = delta > 0 ? 0.9 : 1.1;
//         scale *= zoomFactor;

//         canvas.style.transform = `scale(${scale})`;

//         const { top, left } = container.getBoundingClientRect();
//         const x = event.clientX - left;
//         const y = event.clientY - top;
//         const newScrollLeft = (container.scrollLeft + x) * zoomFactor - x;
//         const newScrollTop = (container.scrollTop + y) * zoomFactor - y;
//         container.scrollLeft = newScrollLeft;
//         container.scrollTop = newScrollTop;

//         context.clearRect(0, 0, canvas.width, canvas.height);

//         console.log("event: ", event);
//         if (event.ctrlKey) {
//           event.preventDefault();

//           let delta =
//             event.deltaY > 0
//               ? pageSizeValue > 10
//                 ? -4
//                 : 0
//               : pageSizeValue < 240
//               ? 4
//               : 0;
//           const newSize = pageSizeValue + delta;

//           if (delta === -4 && newSize < 10) {
//             delta = pageSizeValue - 10;
//           }
//           if (delta === 4 && newSize > 240) {
//             delta = 240 - pageSizeValue;
//           }
//           setPageSizeValue((prevSize: any) => prevSize + delta);
//         }
//       }
//     };

//     container.addEventListener("wheel", handleWheel, { passive: false });

//     return () => {
//       container.removeEventListener("wheel", handleWheel);
//     };
//   }, []);

//   return (
//     <>
//       <div>
//         <div
//           ref={containerRef}
//           style={{
//             width: `${screenWidth - (openPannelbar ? 477 : 125)}px`,
//             height: `${screenHeight - (openTemplatebar ? 329 : 218)}px`,
//             display: "flex",
//             alignItems: "center",
//             overflow: "scoll",
//             justifyContent: "center",
//             position: "relative",
//           }}
//           className="main_editor"
//           id="root"
//         >
//           <canvas
//             ref={canvasRef}
//             style={{
//               width: "200px",
//               height: "200px",
//               backgroundImage: "url(./images/editImage.svg)",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//               position: "absolute",
//               margin: "auto",
//               left: 0,
//               right: 0,
//               top: 0,
//               bottom: 0,
//               // top: `${canvasHeight - 775}px`,
//             }}
//           ></canvas>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import TextEdit from "./components/textEditBox/TextEdit";
import { useSelector } from "react-redux";
import axios from "axios";

export default function EditorBox({
  pageSizeValue,
  setPageSizeValue,
  dataBar,
  setDataBar,
}: any) {
  const bottombarValue = useSelector((state: any) => state.data.bottombar);
  console.log("pageSizeValue: ", pageSizeValue);
  const parentRef = useRef(null);
  const canvasRef = useRef(null);
  const [canvasHeight, setCanvasHeight] = useState<number>(200);
  const [canvasWidth, setCanvasWidth] = useState<number>(200);
  const [divSize, setDivSize] = useState(Number(pageSizeValue));
  console.log("divSize: ", divSize);

  useEffect(() => {
    const handleWheel = (event: any) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };

    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.addEventListener("wheel", handleWheel, true);
    }

    return () => {
      if (rootElement) {
        rootElement.removeEventListener("wheel", handleWheel, true);
      }
    };
  }, []);
  const handleScroll = (event: any) => {
    console.log("event: ", event);
    if (event.ctrlKey) {
      event.preventDefault();

      let delta =
        event.deltaY > 0
          ? pageSizeValue > 10
            ? -4
            : 0
          : pageSizeValue < 240
          ? 4
          : 0;
      const newSize = pageSizeValue + delta;

      if (delta === -4 && newSize < 10) {
        delta = pageSizeValue - 10;
      }
      if (delta === 4 && newSize > 240) {
        delta = 240 - pageSizeValue;
      }
      setPageSizeValue((prevSize: any) => prevSize + delta);
    }
  };

  useEffect(() => {
    const canvas: any = canvasRef.current;
    if (canvas) {
      const { width, height } = canvas.getBoundingClientRect();
      setCanvasWidth(width);
      setCanvasHeight(height);
      console.log("Canvas Width:", width);
      console.log("Canvas Height:", height);
    }
    setDivSize(Number(pageSizeValue));

    const scrollContainer: any = scrollContainerRef.current;

    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey) {
        event.preventDefault();

        const scrollHeight = scrollContainer.scrollHeight;
        const clientHeight = scrollContainer.clientHeight;
        const scrollWidth = scrollContainer.scrollWidth;
        const clientWidth = scrollContainer.clientWidth;

        const scrollTopMax = scrollHeight - clientHeight;
        const scrollLeftMax = scrollWidth - clientWidth;

        const scrollPositionY =
          (event.clientY / window.innerHeight) * scrollTopMax;
        const scrollPositionX =
          (event.clientX / window.innerWidth) * scrollLeftMax;

        scrollContainer.scroll(scrollPositionX, scrollPositionY);
      }
    };

    const handleContainerWheel = (event: WheelEvent) => {
      if (!event.ctrlKey) {
        event.preventDefault();
      }
    };

    scrollContainer.addEventListener("wheel", handleContainerWheel, {
      passive: false,
    });
    scrollContainer.addEventListener("wheel", handleWheel);

    return () => {
      scrollContainer.removeEventListener("wheel", handleContainerWheel);
      scrollContainer.removeEventListener("wheel", handleWheel);
    };
  }, [pageSizeValue]);

  const [activeBotton, setActiveBotton] = useState<string>("");
  const [screenHeight, setScreenHeight] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  console.log("screenWidth: ", screenWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
      setScreenWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const scrollContainerRef = useRef(null);

  const data = useSelector((state: any) => state.data.data);
  console.log("data: ", data);

  const pannelbar = useSelector((state: any) => state.data.pannelbar);
  const databar = useSelector((state: any) => state.data.databar);
  console.log("databar: ", databar);

  useEffect(() => {
    axios
      .post("https://bgremover.craftyartapp.com/payment/web_razorpay", {
        user_id: "P5avk7of60N2CSytU7lMHLfjR4u1",
        packageId: "16",
        packageName: "3 Days",
        rate: "49",
        currency: "INR",
      })
      .then((res) => {
        console.log("newRessfsfsf 1: ", res);
      })
      .catch((error) => {
        console.log("newRessfsfsf 2: ", error);
      });
  }, []);

  return (
    <>
      {/* <div className="animate_position_box">
        <button
          onClick={() => setActiveBotton("animate")}
          className={`${activeBotton === "animate" && "active_shadow"}`}
        >
          <img src="./icons/animate.svg" alt="" />
          Animate
        </button>
        <div className="col_devider"></div>
        <button
          className={`${activeBotton === "position" && "active_shadow"}`}
          onClick={() => setActiveBotton("position")}
        >
          Position
        </button>
      </div> */}
      <TextEdit dataBar={dataBar} setDataBar={setDataBar} />

      <div
        ref={scrollContainerRef}
        style={{
          // width: `${screenWidth - (pannelbar || databar ? 477 : 125)}px`,
          width: "100%",
          height: `${screenHeight - (bottombarValue ? 329 : 218)}px`,
          display: "flex",
          alignItems:
            screenHeight - (bottombarValue ? 329 : 218) <= canvasHeight
              ? "flex-start"
              : "center",
          overflow: "scroll",
          justifyContent:
            screenWidth - (pannelbar || databar ? 477 : 125) <= canvasWidth
              ? "flex-start"
              : "center",
        }}
        className="main_editor"
        onWheelCapture={handleScroll}
        id="root"
      >
        <canvas
          width={200}
          height={200}
          style={{
            transform: `scale(${pageSizeValue / 10})`,
            position: "absolute",
          }}
          className="canvas_tag"
          id="your-canvas"
          ref={canvasRef}
        ></canvas>

        <canvas
          style={{
            // backgroundColor: "white",
            backgroundImage: "url(./images/editImage.svg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: `${canvasHeight}px`,
            width: `${canvasWidth}px`,
            margin: "auto",
          }}
          className="canvas_tag"
          id="your-canvas"
        ></canvas>
      </div>
    </>
  );
}
