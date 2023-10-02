import React, { useState } from "react";

function AddCatatan({tambahCatatan}) {

  const [inputJudul, setInputJudul] = useState("");
  const [inputIsi, setInputIsi] = useState("");

  const handleInputJudul = (e) => {
    setInputJudul(e.target.value);
  }

  const handleInputIsi = (e) => {
    setInputIsi(e.target.value);
  }

  const clear = () => {
    setInputJudul("");
    setInputIsi("");
  }
 
  return (
    <>
      <div className="sidebar-header">
        <div className="sidebar-header-content">
          <span>Tambah Catatan</span>
          <span className="addNew-button" onClick={()=> {tambahCatatan(inputJudul,inputIsi), clear()}}>+</span>
        </div>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-content">
          <div className="sidebar-filter">
            <input type="text" className="input-judul" placeholder="Masukan Judul..." value={inputJudul} onChange={handleInputJudul}/>
          </div>
          <div className="sidebar-filter">
            <textarea className="input-isi" name="" id="" placeholder="Isi catatanmu disini..." value={inputIsi} onChange={handleInputIsi}></textarea>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddCatatan;