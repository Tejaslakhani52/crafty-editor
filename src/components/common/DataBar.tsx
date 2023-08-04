import SearchBar from "@/components/common/SearchBar";
import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export default function DataBar(props: any) {
  const innerSidebarRef = useRef(null);

  const [isTrue, setIsTrue] = useState(false);

  useEffect(() => {
    setIsTrue(true);

    const timer = setTimeout(() => {
      setIsTrue(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [props?.animate]);

  return (
    <div
      className="inner_pannelbar threed_shadow"
      style={{
        width: props?.openPannelbar ? "350px" : "0",
        padding: props?.openPannelbar ? "15px 0px" : "0",
      }}
    >
      {props?.openPannelbar && (
        <div className={`${isTrue && props?.animationClass}`}>
          {props.children}
        </div>
      )}
    </div>
  );
}
