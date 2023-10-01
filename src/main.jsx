import React, { useEffect, useState } from "react";

function MainContent({ id, dataCatatan, handleSimpan }) {

  const [displayedData, setDisplayedData] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");


  const handleChangedtitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangedbody = (e) => {
    setBody(e.target.value);
  };
  useEffect(() => {
    setDisplayedData(dataCatatan.filter((data) => data.id == id));
  }, [id]);
  useEffect(() => {
    if (displayedData.length > 0) {
      setBody(displayedData[0].body)
      setTitle(displayedData[0].title);
    }
  }, [displayedData])
  useEffect(() => {
    setBody('')
    setTitle('');
  }, [dataCatatan])

  return (
    <>
      <div className="main-container">
        {
          id !== 0 && displayedData.length > 0 ?
            <>
              <div className="main-header">
                <div className="main-header-content">
                  <input className="judul-input" type="text" placeholder="judul..." value={title} onChange={handleChangedtitle} />
                  <span className="simpan-button" onClick={() => handleSimpan(id, title, body)}>SIMPAN</span>
                </div>
              </div>
              <div className="main-body">
                <div className="main-content">
                  <textarea name="catatan-input" id="catatan-input" className="catatan-input" onChange={handleChangedbody} value={body} autoFocus></textarea>
                </div>
              </div>
            </>
            :
            <>
              <div className="main-header">
                <div className="main-header-content">
                  <input className="judul-input" type="text" placeholder="judul..." disabled/>
                  <span className="simpan-button">SIMPAN</span>
                </div>
              </div>
              <div className="main-body">
                <div className="main-content">
                  <textarea name="catatan-input" id="catatan-input"></textarea>
                </div>
              </div>
            </>
        }
      </div>
    </>
  )
}

export default MainContent;