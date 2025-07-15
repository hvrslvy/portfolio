import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";
import aeronauticEngineeringImage from "../assets/images/Timeline/AeronauticEngineering.png";
import legoLeagueImage from "../assets/images/Timeline/LegoLeagueProgram.png";

function Timeline() {
  return (
    <div id="journey">
      <div className="items-container">
        <h1>My Journey In Data & Technology</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBook} />}
          >
            <h3 className="vertical-timeline-element-title">
              Aeronautic Engineering Module
            </h3>
            <p>
              I joined a hands-on module where I learned about the principles of
              flight and built a simple model plane.
            </p>
            <p>
              <strong>What I learnt:</strong> I understood how engineering
              relies on data, precision, and analysis.
            </p>
            <p>
              <strong>How it sparked my interest:</strong> It made me curious
              about how data is used in technical systems and how it supports
              innovation and design.
            </p>
            <img
              src={aeronauticEngineeringImage}
              style={{ marginTop: 20 }}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBook} />}
          >
            <h3 className="vertical-timeline-element-title">
              Lego League ALP Program
            </h3>
            <p>
              I participated in a coding challenge where we used sensors and
              automation to build a simple solution. I worked in a team and I
              presented our project to the principal.
            </p>
            <p>
              <strong>What I learnt:</strong> I was introduced to basic
              programming and how to solve problems using technology.
            </p>
            <p>
              <strong>How it sparked my interest:</strong> It showed me how data
              and technology come together which sparked my curiosity.
            </p>
            <img
              src={legoLeagueImage}
              style={{ marginTop: 20 }}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBook} />}
          >
            <h3 className="vertical-timeline-element-title">
              Young Engineering Award
            </h3>
            <p>
              I received this award for completing a technical engineering
              programme.
            </p>
            <p>
              <strong>What I learnt:</strong> It recognizes my strength in STEM
              related programs and helped me want to try new learning
              opportunities.
            </p>
            <p>
              <strong>How it sparked my interest:</strong> It encouraged me to
              continue developing my skills in technology and explore the tech
              industry more.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
