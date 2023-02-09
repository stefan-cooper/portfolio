import { Box, Image, Tooltip } from "@chakra-ui/react";
import React, { FunctionComponent, useEffect } from "react";
import Link from "next/link";

export const Navbar: FunctionComponent = () => {
  const refToComponent = React.useRef(null);
  useEffect(() => {
    const animate = async () => {
      if (refToComponent.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(refToComponent.current, {
          origin: "bottom",
          duration: 3000,
          opacity: 0,
          delay: 1000,
        });
      }
    };
    animate();
  }, []);

  return (
    <nav
      ref={refToComponent}
      className={
        "fixed z-50 top-0 flex flex-row align-middle justify-between w-full h-16 backdrop-blur-lg"
      }
    >
      <div className="">
        <Image className="h-12 w-auto ml-4 m-2" src="/logo_tp.png" />
      </div>
      <ul className="text-white flex align-middle justify-center mr-4">
        <li className="m-4 self-center opacity-50">
          <Tooltip label="Coming soon!">
            <Link className="cursor-default" href="/experience">
              Experience
            </Link>
          </Tooltip>
        </li>
        <li className="m-4 self-center opacity-50">
          <Tooltip label="Coming soon!">
            <Link className="cursor-default" href="/projects">
              Projects
            </Link>
          </Tooltip>
        </li>
        <li className="m-4 self-center opacity-50">
          <Tooltip label="Coming soon!">
            <Link className="cursor-default" href="/blog">
              Blog
            </Link>
          </Tooltip>
        </li>
      </ul>
    </nav>
  );
};
