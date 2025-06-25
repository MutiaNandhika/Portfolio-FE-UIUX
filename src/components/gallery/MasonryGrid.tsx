"use client";

import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import Modal from "react-modal";
import { Media, Text } from "@once-ui-system/core";
import styles from "./Gallery.module.scss";
import { gallery } from "@/resources";

// Set root element secara aman
export default function MasonryGrid() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<any>(null);

  useEffect(() => {
  if (typeof window !== "undefined") {
    const nextRoot = document.getElementById("__next");
    if (nextRoot) {
      Modal.setAppElement(nextRoot);
    }
  }
}, []);


  const breakpointColumnsObj = {
    default: 2,
    720: 1,
  };

  const openModal = (image: any) => {
    setActiveImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveImage(null);
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.masonryGrid}
        columnClassName={styles.masonryGridColumn}
      >
        {gallery.images.map((image, index) => (
          <div
            key={index}
            onClick={() => openModal(image)}
            className={styles.gridItem}
            style={{ cursor: "pointer" }}
          >
            <Media
              priority={index < 10}
              sizes="(max-width: 560px) 100vw, 50vw"
              radius="m"
              aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "3 / 4"}
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </Masonry>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Image Detail"
        style={{
          content: {
            inset: "10%",
            background: "#fff",
            borderRadius: "12px",
            padding: "20px",
            overflow: "auto",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1000,
          },
        }}
      >
        {activeImage && (
          <div style={{ textAlign: "center" }}>
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
            />
            <Text as="p" variant="body-default-m" style={{ marginTop: "12px" }}>
              {activeImage.alt}
            </Text>
            <button
              onClick={closeModal}
              style={{
                marginTop: "16px",
                padding: "8px 16px",
                border: "none",
                background: "#333",
                color: "#fff",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </>
  );
}
