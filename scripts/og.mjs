import { readFile, writeFile } from "node:fs/promises";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const display = await readFile(
  "node_modules/@fontsource/bricolage-grotesque/files/bricolage-grotesque-latin-800-normal.woff",
);
const body = await readFile(
  "node_modules/@fontsource/nunito-sans/files/nunito-sans-latin-700-normal.woff",
);

const svg = await satori(
  {
    type: "div",
    props: {
      style: {
        width: "1200px",
        height: "630px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#FFF6EB",
        padding: "56px 64px",
        border: "14px solid #1E2A4A",
        position: "relative",
      },
      children: [
        {
          type: "div",
          props: {
            style: {
              position: "absolute",
              top: "-40px",
              right: "-40px",
              width: "180px",
              height: "180px",
              borderRadius: "999px",
              backgroundColor: "#FFD23F",
            },
          },
        },
        {
          type: "div",
          props: {
            style: {
              position: "absolute",
              bottom: "-50px",
              left: "-30px",
              width: "160px",
              height: "160px",
              borderRadius: "999px",
              backgroundColor: "#2F5BFF",
            },
          },
        },
        {
          type: "div",
          props: {
            style: { display: "flex", alignItems: "center", gap: "22px" },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    width: "88px",
                    height: "88px",
                    borderRadius: "28px",
                    backgroundColor: "#FF6A3D",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "4px solid #1E2A4A",
                  },
                  children: {
                    type: "div",
                    props: {
                      style: {
                        width: "36px",
                        height: "20px",
                        borderLeft: "6px solid white",
                        borderBottom: "6px solid white",
                        transform: "rotate(-45deg)",
                        marginTop: "-6px",
                      },
                    },
                  },
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    fontFamily: "Bricolage Grotesque",
                    fontSize: "58px",
                    fontWeight: 800,
                    letterSpacing: "-0.05em",
                  },
                  children: [
                    {
                      type: "span",
                      props: { style: { color: "#1E2A4A" }, children: "metrics" },
                    },
                    {
                      type: "span",
                      props: { style: { color: "#E24C20" }, children: "pick" },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              fontFamily: "Bricolage Grotesque",
              fontSize: "68px",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.045em",
              color: "#1E2A4A",
              maxWidth: "980px",
            },
            children: "Pick the tool that shows what actually brings revenue",
          },
        },
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              fontFamily: "Nunito Sans",
              fontSize: "30px",
              fontWeight: 700,
              color: "#5C514C",
            },
            children: "Independent analytics comparisons for founders",
          },
        },
      ],
    },
  },
  {
    width: 1200,
    height: 630,
    fonts: [
      { name: "Bricolage Grotesque", data: display, weight: 800, style: "normal" },
      { name: "Nunito Sans", data: body, weight: 700, style: "normal" },
    ],
  },
);

const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();
await writeFile("src/assets/og-default.png", png);
console.log("wrote og", png.length);
