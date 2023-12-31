import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import MainContent from "./main";
import getCatatan from "../public/catatan";
import AddCatatan from "./addCatatan";


function CatatanApp() {

  const [dataCatatan, setDataCatatan] = useState(getCatatan());
  const [result, setResult] = useState(dataCatatan);
  const [displayedId, setDisplayedId] = useState(0);
  const [isArchiveShow, setIsArchiveShow] = useState(false);

  useEffect(() => {
    setResult(dataCatatan);
  }, [dataCatatan])

  const filterData = (e) => {
    setResult(dataCatatan.filter((data) => data.title.toLowerCase().includes(e.target.value.toLowerCase())));
  }
  const hapusCatatan = (id) => {
    setDisplayedId(0);
    setDataCatatan(dataCatatan.filter((data) => data.id !== id));
    // alert("Data telah dihapus!");
  }
  const tambahCatatan = (judul, isi) => {
    if (judul !== "" && isi !== "") {
      setDataCatatan([
        ...dataCatatan,
        {
          id: Date.now(),
          title: judul,
          body: isi,
          archived: false,
          createdAt: new Date().toISOString(),
          updatedAt: ""
        }
      ]);
      alert("Data Baru telah ditambahkan!");
    }
  }
  const handleClickCatatan = (id) => {
    // put your code here
    setDisplayedId(id);
  }
  const handleSimpan = (id, title, body) => {
    let tmpDataCatatan = dataCatatan;
    for (let i = 0; i < tmpDataCatatan.length; i++) {
      if (tmpDataCatatan[i].id == id) {
        tmpDataCatatan[i].title = title;
        tmpDataCatatan[i].body = body;
        tmpDataCatatan[i].updatedAt = new Date().toISOString();
      }
    }
    setDataCatatan(tmpDataCatatan);
    handleClickCatatan(null);
  }

  return (
    <div className="container">
      <Sidebar handleClickCatatan={handleClickCatatan} isArchiveShow={isArchiveShow} dataCatatan={result} hapusCatatan={hapusCatatan} filterData={filterData} tambahCatatan={tambahCatatan} />
      <MainContent id={displayedId} dataCatatan={result} handleSimpan={handleSimpan} />
    </div>
  )
}

export default CatatanApp;