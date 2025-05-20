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
  const [selectedProject, setSelectedProject] = useState(null);
  const [initialSlide, setInitialSlide] = useState(0);
  const { isDark } = useContext(StyleContext);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  function openUrlInNewTab(url) {
    if (!url) return;
    const win = window.open(url, "_blank");
    win?.focus();
  }

  if (!bigProjects.display) return null;

  const openPreview = (project, slideIndex) => {
    setSelectedProject(project);
    setInitialSlide(slideIndex);
    document.body.style.overflow = "hidden";
  };

  const closePreview = () => {
    setSelectedProject(null);
    setInitialSlide(0);
    document.body.style.overflow = "auto";
  };

  return (
    <Fade bottom duration={1000} distance="10px">
      <div className="main" id="projects" style={{ marginTop: "-30px" }}>
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark ? "dark-mode project-subtitle" : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={bigProjects.projects.length >= 3} // Enable loop only if 3 or more projects
              className="projects-swiper"
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 15 },
                1024: { slidesPerView: 3, spaceBetween: 20 },
              }}
            >
              {bigProjects.projects.map((project, i) => (
                <SwiperSlide key={i}>
                  <div
                    className={
                      isDark
                        ? "dark-mode project-card project-card-dark"
                        : "project-card project-card-light"
                    }
                  >
                    <div className="project-slider">
                      <Swiper
                        modules={[Autoplay, Navigation, Pagination, EffectFade]}
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        effect="fade"
                        autoplay={{
                          delay: 3000,
                          disableOnInteraction: false,
                        }}
                        loop={project.images.length > 1}
                        className="swiper-container"
                      >
                        {project.images.map((img, idx) => (
                          <SwiperSlide key={idx}>
                            <img
                              src={img}
                              alt={project.projectName}
                              className="project-image"
                              onClick={() => openPreview(project, idx)}
                              onError={(e) => {
                                console.error("Image failed to load:", img);
                                e.target.src = "/fallback-image.jpg"; // Optional: Add a fallback image
                              }}
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>

                    <div className="project-detail">
                      <h5
                        className={isDark ? "dark-mode card-title" : "card-title"}
                      >
                        {project.projectName}
                      </h5>
                      <p
                        className={
                          isDark ? "dark-mode card-subtitle" : "card-subtitle"
                        }
                      >
                        {project.projectDesc.map((item, index) => (
                          <div
                            key={index}
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              textAlign: "left",
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
                              className={
                                isDark ? "dark-mode project-tag" : "project-tag"
                              }
                              onClick={() => openUrlInNewTab(link.url)}
                            >
                              {link.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {selectedProject && (
          <div className="image-preview-modal" onClick={closePreview}>
            <div
              className="image-preview-content"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="close-preview" onClick={closePreview}>
                ×
              </span>
              <Swiper
                modules={[Autoplay, Navigation, Pagination, EffectFade]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                effect="fade"
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                loop={selectedProject.images.length > 1}
                initialSlide={initialSlide}
                className="swiper-preview"
              >
                {selectedProject.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={selectedProject.projectName}
                      className="preview-image"
                      onError={(e) => {
                        console.error("Image failed to load:", img);
                        e.target.src = "/fallback-image.jpg"; // Optional: Add a fallback image
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}
      </div>
    </Fade>
  );
}