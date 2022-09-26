import { CreateSection } from "../components/CreateSection"
import { useSectionStore } from "../../hooks/useSectionStore";

export const AdminSectionsPage = () => {
  
  const { startCreateSection } = useSectionStore();
  return (
    <div className="row pt-4 centered-children">
        <div className="col-10 col-md-10 col-lg-4 centered-children" >
            <CreateSection startCreateSection={startCreateSection} />
        </div>
        <div className="col-10 col-md-10 col-lg-7 centered-children mt-4">
            Aqui Lista de secciones creadas y dentro de ellas la lista de estudiantes matriculados
        </div>
    </div>
  )
}
