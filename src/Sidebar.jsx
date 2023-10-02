import React, { useState } from "react";
import SidebarList from "./sidebarList";
import AddCatatan from "./addCatatan";

function Sidebar ({dataCatatan, hapusCatatan, filterData, tambahCatatan, handleClickCatatan, isArchiveShow}) {

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-header-content">
        <span>Catatan Pribadi</span>
        <span className="addNew-button" onClick={() => tambahCatatan()}>+</span>
        </div>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-content">
          <div className="sidebar-filter">
            <input className="filter-input" type="text" name="" id="" placeholder="Search Here..." onChange={filterData}/>
          </div>
          <SidebarList dataCatatan={dataCatatan} hapusCatatan={hapusCatatan} handleClickCatatan={handleClickCatatan} isArchiveShow={isArchiveShow}/>
        </div>
      </div>
          <AddCatatan tambahCatatan={tambahCatatan}/>
    </div>
  )
}

export default Sidebar;