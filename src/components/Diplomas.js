import { Outlet, NavLink } from "react-router-dom";
import { getDiplomas } from "../api";
import { useState } from "react";

export default function Diplomas() {
  const diplomas = getDiplomas();
  const [query, setQuery] = useState("");

  const filteredDiplomas = diplomas.filter((d) =>
    d.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container diplomas-page">
      {/* Header section */}
      <div className="schools-header">
        <h1 className="schools-title">Schools</h1>

        <input
          type="text"
          placeholder="Search diplomas..."
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="school-tabs">
          {filteredDiplomas.map((diploma) => (
            <NavLink
              key={diploma.id}
              to={diploma.id}
              className={({ isActive }) =>
                isActive ? "school-tab active" : "school-tab"
              }
            >
              {diploma.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Nested routes */}
      <Outlet />
    </div>
  );
}
