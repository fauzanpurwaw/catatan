import React from "react";

function SidebarItem({judul, createdAt, id, hapusCatatan}) {

  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return date.toLocaleDateString('id-ID', options);
  };

  return (
    <div className="sidebar-item">
      <div className="item-title">
        {judul}
      </div>
      <div className="item-side">
      <div className="delete-button" onClick={() => hapusCatatan(id)}>
        Delete
      </div>
      <div className="createdAt">
        {formatDate(createdAt)}
      </div>
      </div>
    </div>
  )
}

export default SidebarItem;