import React from "react";
import SidebarItem from "./sidebarItem";


function SidebarList({dataCatatan, hapusCatatan}) {

  return (
    <div className="sidebar-list">
      {
        dataCatatan.map(data => <SidebarItem key={data.id} {...data} hapusCatatan={hapusCatatan}/>)
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