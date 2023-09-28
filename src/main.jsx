import React, { useEffect, useState } from "react";

function MainContent({ id, dataCatatan, handleSimpan }) {

  const [displayedData, setDisplayedData] = useState([]);
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");

  
  const handleChangedJudul = (e) => {
    setJudul(e.target.value);
  };
  const handleChangedIsi = (e) =>  {
    setIsi(e.target.value);
  };
  useEffect(()=> {
    setDisplayedData(dataCatatan.filter((data) => data.id == id));
  }, [id]);
  useEffect(()=> {
    if (displayedData.length > 0) {
      setIsi(displayedData[0].isi)
      setJudul(displayedData[0].judul);
    }
  },[displayedData])

  return (
    <>
      <div className="main-container">
        {
          id !== 0 && displayedData.length > 0 ?
            <>
              <div className="main-header">
                <div className="main-header-content">
                  <input className="judul-input" type="text" placeholder="Judul..." value={judul} onChange={handleChangedJudul}/>
                  <span className="simpan-button" onClick={() => handleSimpan(id, judul, isi)}>SIMPAN</span>
                </div>
              </div>
              <div className="main-body">
                <div className="main-content">
                  <textarea name="catatan-input" id="catatan-input" onChange={handleChangedIsi} value={isi} autoFocus></textarea>
                </div>
              </div>
            </>
            :
            <>
              <div className="main-header">
                <div className="main-header-content">
                  <input className="judul-input" type="text" placeholder="Judul..." />
                  <span className="simpan-button">SIMPAN</span>
                </div>
              </div>
              <div className="main-body">
                <div className="main-content">
                  <textarea name="catatan-input" id="catatan-input" autoFocus></textarea>
                </div>
              </div>
            </>
        }
      </div>
    </>
  )
}

export default MainContent;