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
      <header>
        <h1 style={{fontSize: 32}}>OneStop<span style={{color:"#c49cff"}}>AI</span></h1>
        <p style={{color:"#aaa"}}>Your all-in-one AI content studio</p>
      </header>

      <section style={{
        background:"#20202a",
        padding:20,
        borderRadius:18,
        marginTop:25
      }}>
        <h2>Create content ✨</h2>

        <label>What are you creating?</label>
        <select
          value={mode}
          onChange={e => setMode(e.target.value)}
          style={field}
        >
          <option>Product photo</option>
          <option>AI video</option>
          <option>Social media clip</option>
          <option>Advertisement</option>
        </select>

        <label>Product or brand name</label>
        <input
          placeholder="e.g. Luxury skincare serum"
          value={product}
          onChange={e => setProduct(e.target.value)}
          style={field}
        />

        <label>Creative style</label>
        <select
          value={style}
          onChange={e => setStyle(e.target.value)}
          style={field}
        >
          <option>Luxury</option>
          <option>Minimalist</option>
          <option>Trendy</option>
          <option>Professional</option>
          <option>Feminine</option>
        </select>

        <label>Describe your content</label>
        <textarea
          placeholder="Describe the image or video you want..."
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          style={{...field, minHeight:100}}
        />

        <button
          onClick={() => alert(
            `Your ${mode} brief is ready for ${product}. Style: ${style}. Description: ${prompt}`
          )}
          style={button}
        >
          Create my content ✨
        </button>
      </section>

      <section style={{marginTop:30}}>
        <h2>Your creative studio</h2>
        <p style={{color:"#aaa"}}>
          Generate product photography, AI videos,
          advertisements and social content in one place.
        </p>
      </section>
    </main>
  );
}

const field = {
  display:"block",
  width:"100%",
  boxSizing:"border-box" as const,
  padding:13,
  marginTop:10,
  marginBottom:18,
  borderRadius:9,
  border:"1px solid #444",
  background:"#30303b",
  color:"white",
  fontSize:16
};

const button = {
  width:"100%",
  padding:16,
  borderRadius:12,
  border:"none",
  background:"#b68cff",
  color:"#17121f",
  fontWeight:"bold" as const,
  fontSize:16
};
