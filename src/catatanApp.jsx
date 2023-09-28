import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import MainContent from "./main";
import getCatatan from "../public/catatan";


function CatatanApp() {

  const [dataCatatan, setDataCatatan] = useState(getCatatan());
  const [result, setResult] = useState(dataCatatan);
  const [displayedId, setDisplayedId] = useState(0);

  useEffect(() => {
    setResult(dataCatatan);
  }, [dataCatatan])

  const filterData = (e) => {
    setResult(dataCatatan.filter((data) => data.judul.toLowerCase().includes(e.target.value.toLowerCase())));
  }
  const hapusCatatan = (id) => {
    setDataCatatan(dataCatatan.filter((data) => data.id !== id));
    setDisplayedId(0);
    console.log(displayedId);
    // alert("Data telah dihapus!");
  }
  const tambahCatatan = () => {
    setDataCatatan([
      ...dataCatatan,
      {
        id: Date.now(),
        judul: "Tanpa Judul",
        isi: "Ketik Catatan mu disini..",
        archived: false,
        createdAt: new Date().toISOString(),
        updatedAt: "2211"
      }
    ]);
    alert("Data Baru telah ditambahkan!");
  }
  const handleClickCatatan = (id) => {
    setDisplayedId(id);
  }
  const handleSimpan = (id, judul, isi) => {
    let tmpDataCatatan = dataCatatan;
    for (let i=0; i < tmpDataCatatan.length; i++) {
      if (tmpDataCatatan[i].id == id) {
        tmpDataCatatan[i].judul = judul;
        tmpDataCatatan[i].isi   = isi;
        tmpDataCatatan[i].updatedAt = new Date().toISOString();
      }
    }
    setDataCatatan(tmpDataCatatan);
    handleClickCatatan(id);
  }

  return (
    <div>
      <Sidebar handleClickCatatan={handleClickCatatan} dataCatatan={result} hapusCatatan={hapusCatatan} filterData={filterData} tambahCatatan={tambahCatatan} />
      <MainContent id={displayedId} dataCatatan={dataCatatan} handleSimpan={handleSimpan}/>
    </div>
  )
}

export default CatatanApp;