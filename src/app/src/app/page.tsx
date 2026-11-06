"use client";

import { useState } from "react";

export default function Home() {
  const [product, setProduct] = useState("");
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("Luxury");
  const [mode, setMode] = useState("Product photo");

  return (
    <main style={{
      minHeight: "100vh",
      background: "#111116",
      color: "white",
      padding: "25px",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1>OneStop<span style={{color:"#c49cff"}}>AI</span></h1>
      <p>Your all-in-one AI content studio</p>

      <h2>Create content ✨</h2>

      <label>What are you creating?</label>
      <select value={mode} onChange={e => setMode(e.target.value)}>
        <option>Product photo</option>
        <option>AI video</option>
        <option>Social media clip</option>
        <option>Advertisement</option>
      </select>

      <p>Product or brand name</p>
      <input
        value={product}
        onChange={e => setProduct(e.target.value)}
        placeholder="e.g. Luxury skincare serum"
      />

      <p>Creative style</p>
      <select value={style} onChange={e => setStyle(e.target.value)}>
        <option>Luxury</option>
        <option>Minimalist</option>
        <option>Trendy</option>
        <option>Professional</option>
        <option>Feminine</option>
      </select>

      <p>Describe your content</p>
      <textarea
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        placeholder="Describe what you want..."
      />

      <p>
        <button onClick={() => alert(
          `${mode} for ${product}. Style: ${style}. ${prompt}`
        )}>
          Create my content ✨
        </button>
      </p>
    </main>
  );
}
