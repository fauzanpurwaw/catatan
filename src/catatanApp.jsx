import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import MainContent from "./main";
import getCatatan from "../public/catatan";


function CatatanApp() {

  const [dataCatatan, setDataCatatan] = useState(getCatatan());
  const [result, setResult] = useState(dataCatatan);

  useEffect(() => {
    setResult(dataCatatan);
  }, [dataCatatan])

  const filterData = (e) => {
    setResult(dataCatatan.filter((data) => data.judul.toLowerCase().includes(e.target.value.toLowerCase())));
  }
  const hapusCatatan = (id) => {
    setDataCatatan(dataCatatan.filter((data) => data.id !== id));
    // setResult(dataCatatan);
    // console.log(result);
  }
  const tambahCatatan = () => {
    setDataCatatan([
      ...dataCatatan,
      {
        id: Date.now(),
        judul: "Tanpa Judul",
        isi: "",
        archived: false,
        createdAt: new Date().toISOString(),
        updatedAt: "2211"
      }
    ])
    console.log(Date.now());

  }


  return (
    <div>
      <Sidebar dataCatatan={result} hapusCatatan={hapusCatatan} filterData={filterData} tambahCatatan={tambahCatatan} />
      <MainContent />
    </div>
  )
}

export default CatatanApp;