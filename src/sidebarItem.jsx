import React from "react";

function SidebarItem({ judul, createdAt, updatedAt, id, hapusCatatan, handleClickCatatan }) {

  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return date.toLocaleDateString('id-ID', options);
  };

  return (
    <div className="sidebar-item" onClick={() => handleClickCatatan(id)}>
      <div className="item-title">
        {judul}
      </div>
      <div className="item-side">
          <div className="delete-button" onClick={() => hapusCatatan(id)}>
            Delete
          </div>
          <div className="createdAt">
            {
              updatedAt? formatDate(updatedAt) : formatDate(createdAt)
            }
          </div>
      </div>
    </div>
  )
}

export default SidebarItem;