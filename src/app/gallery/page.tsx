// src/app/gallery/page.tsx
"use client";

import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import Modal from "react-modal";
import { Text } from "@once-ui-system/core";
import { gallery } from "@/resources";
import styles from "@/components/gallery/Gallery.module.scss";
import MasonryGrid from "@/components/gallery/MasonryGrid";

export default function GalleryPage() {
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
        breakpointCols={{ default: 2, 720: 1 }}
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
            <img
              src={image.src}
              alt={image.alt}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                display: "block",
              }}
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
