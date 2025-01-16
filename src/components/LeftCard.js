import React from "react";
import {
  DescriptionGradientSnippet,
  aboutMe,
  experience,
  projects,
  resumeURL,
} from "../util/constants";
import { useThemeRendererContext } from "../contexts/ThemeContext";
import { useContentControlContext } from "../contexts/ContentControlContext";
import { Typography } from "@mui/material";
import MyButton from "./MyButton";

const LeftCard = () => {
  const { colorNumber } = useThemeRendererContext();
  const { currentContent, selectedTab } = useContentControlContext();
  console.log({ currentContent });
  let result = selectedTab
    ? projects.find((item) => item.name === currentContent)
    : experience.find((item) => item.companyName === currentContent);
  const openLink = (linkURL) => {
    window.open(linkURL, "_blank");
  };
  return result ? (
    <div className="leftCardContainer">
      <span className="contentHeading">
        {selectedTab ? result.name : result.companyName}
      </span>
      {result.from && result.to && (
        <span className="contentSubHeading">
          {result.from} - {result.to}
        </span>
      )}

      <div
        className="descrptionBorder"
        style={{ background: DescriptionGradientSnippet(colorNumber) }}
      >
        <div className="description">
          <Typography>{result.description}</Typography>
          <div style={{ display: "flex", marginTop: "1.25rem" }}>
            {result?.links?.map((link) => {
              return (
                <MyButton text={link.text} onClick={() => openLink(link.url)} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="leftCardContainer">
      <span className="welcomeText">Welcome.</span>
      <div
        className="descrptionBorder"
        style={{ background: DescriptionGradientSnippet(colorNumber) }}
      >
        <div className="description">
          {aboutMe}{" "}
          <div style={{ display: "flex", marginTop: "1.25rem" }}>
            <MyButton
              text={"Check out my résumé"}
              onClick={() => openLink(resumeURL)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftCard;
