import React, { LegacyRef } from "react";

const LinkEstilizado = React.forwardRef(
  ({ onClick, href, children }: any, ref: LegacyRef<HTMLAnchorElement>) => {
    return (
      <a href={href} onClick={onClick} ref={ref} style={{ color: "red" }}>
        {children}
      </a>
    );
  }
);

export default LinkEstilizado;
