import { useParams } from "react-router-dom";
import { getModule } from "../api";

export default function Module() {
  const { diplomaId, moduleId } = useParams();
  const module = getModule(diplomaId, moduleId);

  if (!module) {
    return <p>Module not found</p>;
  }

  return (
    <div className="module-section">
      <h3 className="module-label">Module</h3>

      <h2 className="module-title">{module.name}</h2>

      <p className="module-description">
        {module.details}
      </p>

      <div className="lecturer-info">
        <p className="lecturer-name">{module.lecturer}</p>
        <p className="lecturer-role">Lecturer</p>
      </div>
    </div>
  );
}
