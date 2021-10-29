import React from "react";

export default function LibContent({ children }) {
  return (
    <div
      className="fixed top-0 right-0 bottom-0 float-right overflow-scroll bl-1-cloud bg-white"
      style={{ width: "83%" }}
    >
      <div className="container-fluid p-5">
        <div className="container p-5">{children}</div>
      </div>
    </div>
  );
}
