import React, { createRef, useContext } from "react";
import { Fade, Zoom } from "react-reveal";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function EducationCard({ school }) {
  const imgRef = createRef();
  const { isDark } = useContext(StyleContext);

  const GetDescBullets = ({ descBullets }) => {
    return descBullets ? (
      descBullets.map((item, i) => (
        <li key={i} className="subTitle">
          {item}
        </li>
      ))
    ) : null;
  };

  const GetRelevantCoursework = ({ relevantCoursework }) => {
    return relevantCoursework ? (
      <p className="education-text-coursework">
        <strong>Relevant Coursework:</strong> {relevantCoursework.join(", ")}
      </p>
    ) : null;
  };

  if (!school.logo) {
    console.error(`Image of ${school.schoolName} is missing in education section`);
  }

  return (
    <div className="education-card-container">
      <Fade bottom duration={1200} distance="40px">
        <div className={`education-card ${isDark ? "dark-mode" : ""}`}>
          {school.logo && (
            <div className="education-card-left">
              <Zoom duration={800}>
                <img
                  crossOrigin="anonymous"
                  ref={imgRef}
                  className="education-roundedimg"
                  src={school.logo}
                  alt={school.schoolName}
                />
              </Zoom>
            </div>
          )}
          <div className="education-card-right">
            <h4 className="education-text-school">{school.schoolName}</h4>
            {school.place && (
              <p className="education-text-place">
                <i className="fas fa-map-marker-alt"></i> {school.place}
              </p>
            )}
            <div className="education-text-details">
              <h5 className="education-text-subHeader">{school.subHeader}</h5>
              <p className="education-text-duration">{school.duration}</p>
              {school.website && (
                <p className="education-text-website">
                  <a
                    href={school.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                  </a>
                </p>
              )}
              {school.cgpa && (
                <p className="education-text-cgpa">CGPA: {school.cgpa}</p>
              )}
              {school.currentSemester && (
                <p className="education-text-semester">
                  Current Semester: {school.currentSemester}
                </p>
              )}
              {school.percentage && (
                <p className="education-text-percentage">
                  Percentage: {school.percentage}
                </p>
              )}
              {school.grade && (
                <p className="education-text-grade">Grade: {school.grade}</p>
              )}
              <GetRelevantCoursework
                relevantCoursework={school.relevantCoursework}
              />
              <div className="education-text-bullets">
                <ul>
                  <GetDescBullets descBullets={school.descBullets} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}