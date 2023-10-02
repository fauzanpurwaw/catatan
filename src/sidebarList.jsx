import React from "react";
import SidebarItem from "./sidebarItem";


function SidebarList({dataCatatan, hapusCatatan, handleClickCatatan, isArchiveShow}) {

  return (
    <div className="sidebar-list">
      {
        isArchiveShow?
        dataCatatan.filter((data) => data.archived == true).map(data => <SidebarItem key={data.id} {...data} hapusCatatan={hapusCatatan} handleClickCatatan={handleClickCatatan}/>)
        :
        dataCatatan.filter((data) => data.archived == false).map(data => <SidebarItem key={data.id} {...data} hapusCatatan={hapusCatatan} handleClickCatatan={handleClickCatatan}/>)
      }
      {
        dataCatatan.length == 0? 
        <div className="null-item-content">
        Tidak Ada Catatan
        </div>
        : 
        <></>
      }
    </div>
  )
}

export default SidebarList;