import React from "react";
import Split from "react-split";
import "./styles.scss";

const SplitGrid = ({
  children,
  sizes = [70, 30],
  onDrag,
  direction = "horizontal",
  cursor = "col-resize",
  className = "split-row",
}) => {
  return (
    <Split
      onDrag={onDrag}
      sizes={[sizes[0], sizes[1]]}
      direction={direction}
      cursor={cursor}
      className={className}
    >
      {children}
    </Split>
  );
};

export default SplitGrid;
