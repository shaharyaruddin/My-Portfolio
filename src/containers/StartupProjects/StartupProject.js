import React, { useContext, useState, useEffect } from "react";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { bigProjects } from "../../portfolio";
import "./StartupProjects.scss";

export default function StartupProject() {
  const [selectedProject, setSelectedProject] = useState(null); // State for the preview modal (store the entire project)
  const [initialSlide, setInitialSlide] = useState(0); // State for the initial slide in the preview modal

  // Clean up scroll behavior on component unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  function openUrlInNewTab(url) {
    if (!url) return;
    const win = window.open(url, "_blank");
    win.focus();
  }

  const { isDark } = useContext(StyleContext);
  if (!bigProjects.display) return null;

  // Open the preview modal with the selected project and initial slide
  const openPreview = (project, slideIndex) => {
    setSelectedProject(project);
    setInitialSlide(slideIndex);
    // Hide scroll on the body
  };

  // Close the preview modal
  const closePreview = () => {
    setSelectedProject(null);
    setInitialSlide(0);
    // Restore scroll on the body
    document.body.style.overflow = "auto";
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects" style={{
        marginTop : '-30px'
      }}>
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={isDark ? "dark-mode project-subtitle" : "subTitle project-subtitle"}
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => (
              <div
                key={i}
                className={
                  isDark
                    ? "dark-mode project-card project-card-dark"
                    : "project-card project-card-light"
                }
              >
                {/* Project Slider */}
                <div className="project-slider">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                  >
                    {project.images.map((img, idx) => (
                      <SwiperSlide key={idx}>
                        <img
                          src={img}
                          alt={project.projectName}
                          className="project-image"
                          onClick={() => openPreview(project, idx)} // Open preview on click
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Project Details */}
                <div className="project-detail">
                  <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
                    {project.projectName}
                  </h5>
                  <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
                    {project.projectDesc.map((item, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          textAlign: "left",
                          // marginTop: "-15px",
                        }}
                      >
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </p>
                  {project.footerLink && (
                    <div className="project-card-footer">
                      {project.footerLink.map((link, i) => (
                        <span
                          key={i}
                          className={isDark ? "dark-mode project-tag" : "project-tag"}
                          onClick={() => openUrlInNewTab(link.url)}
                        >
                          {link.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simplified Image Preview Modal with Slider */}
        {/* {selectedProject && (
          <div className="image-preview-modal" onClick={closePreview}>
            <div className="image-preview-content" onClick={(e) => e.stopPropagation()}>
              <span className="close-preview" onClick={closePreview}>
                ×
              </span>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                initialSlide={initialSlide}
              >
                {selectedProject.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={selectedProject.projectName}
                      className="preview-image"
                      onError={() => console.log("Image failed to load:", img)} // Debug image loading issues
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )} */}
      </div>
    </Fade>
  );
}