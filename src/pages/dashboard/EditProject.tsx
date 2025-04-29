import { useParams } from "react-router-dom";
import ProjectForm from "@/components/dashboard/ProjectForm";

const EditProject = () => {
    const { id } = useParams<{ id: string }>();

    return <ProjectForm editMode projectId={id} />;
};

export default EditProject; 