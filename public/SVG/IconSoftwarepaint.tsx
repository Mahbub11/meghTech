// icon:paintbrush | Fontawesome https://fontawesome.com/ | Fontawesome
import * as React from "react";

function IconPaintbrush(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 576 512"
      fill={props.fill}
      height={props.height}
      width={props.width}
      {...props}
    >
      <path d="M371.3 367.1c27.3-3.9 51.9-19.4 67.2-42.9L600.2 74.1c12.6-19.5 9.4-45.3-7.6-61.2s-42.9-17.3-61.5-3.3L294.4 187.2c-24 18-38.2 46.1-38.4 76.1l115.3 103.8zm-19.6 25.4l-116-104.4C175.9 290.3 128 339.6 128 400c0 3.9.2 7.8.6 11.6 1.8 17.5-10.2 36.4-27.8 36.4H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h144c61.9 0 112-50.1 112-112 0-2.5-.1-5-.2-7.5z" />
    </svg>
  );
}

export default IconPaintbrush;
