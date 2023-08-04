import { useEffect, useRef } from "react";
import backgroundImage from "../../../../public/images/editImage.svg";
// import backgroundImage from "./images/editImage.svg";

const CanvasComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let scale = 1;
    let offsetX = 0;
    let offsetY = 0;

    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey) {
        event.preventDefault();

        const delta = Math.sign(event.deltaY) * -0.1;
        scale += delta;

        draw();
      }
    };

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.save();
      context.translate(canvas.width / 2, canvas.height / 2);
      context.scale(scale, scale);
      context.translate(-offsetX, -offsetY);
      context.drawImage(
        imageRef.current!,
        -canvas.width / 2,
        -canvas.height / 2,
        canvas.width,
        canvas.height
      );
      context.restore();
    };

    canvas.addEventListener("wheel", handleWheel, { passive: false });

    draw();

    return () => {
      canvas.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={5000}
      height={5000}
      style={{
        // backgroundColor: "white",
        backgroundImage: "url(./images/editImage.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

export default CanvasComponent;
