import { useParams, NavLink, Outlet } from "react-router-dom";
import { getDiploma } from "../api";

export default function Diploma() {
  const { diplomaId } = useParams();
  const diploma = getDiploma(diplomaId);

  if (!diploma) {
    return <p>Diploma not found</p>;
  }

  return (
    <div className="diploma-section">
      <h2 className="diploma-title">
        {diploma.name} Diploma
      </h2>

      <div className="module-cards">
        {diploma.modules.map((module) => (
          <NavLink
            key={module.id}
            to={module.id}
            className="module-card"
          >
            <strong>{module.code}</strong> | {module.name}
          </NavLink>
        ))}
      </div>

      {/* Module details */}
      <Outlet />
    </div>
  );
}
