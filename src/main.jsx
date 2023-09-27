import React from "react";

function MainContent () {
  return (
    <div className="main-container">
      <div className="main-header">
        <div className="main-header-content">
        <input className="judul-input" type="text" placeholder="Judul..." />
        <button className="simpan-button">SIMPAN</button>
        </div>
      </div>
      <div className="main-body">
        <div className="main-content">
          <textarea name="catatan-input" id="catatan-input" autoFocus></textarea>
        </div>
      </div>
    </div>
  )
}

export default MainContent;