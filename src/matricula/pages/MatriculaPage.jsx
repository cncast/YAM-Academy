import { getOppenedSections } from "../../helpers/getOppenedSections"
import { SectionItem } from "../components/SectionItem";
import { SectionList } from "../components/SectionList"
import { SectionRequestItem } from "../components/SectionRequestItem";

export const MatriculaPage = () => {
  const oppenedSections = getOppenedSections();
  return (
    <div className="container">
      <div className="row centered-children">
        
        <h6 className="mt-4 col-xl-2 col-lg-2 col-md-3 col-sm-3 col-8">
          <i className="fas fa-filter"/>
          &nbsp;
          Filtrar por:
        </h6>
        <div className="col-3 mt-3 col-xl-3 col-lg-4 col-md-4 col-sm-5 col-8">
          <select className="form-select" aria-label="Default select example">
            <option defaultValue>Todos los idiomas</option>
            <option value="1">Frances</option>
            <option value="2">Ingles</option>
            <option value="3">Portugues</option>
          </select>
        </div>
        <div className="col-3 mt-3 col-xl-3 col-lg-4 col-md-4 col-sm-4 col-8">
          <select className="form-select" aria-label="Default select example">
            <option defaultValue>Todos los niveles</option>
            <option value="1">A1</option>
            <option value="2">A2</option>
            <option value="1">B1</option>
            <option value="2">B2</option>
            <option value="1">C1</option>
            <option value="2">C2</option>
          </select>
        </div>
      </div>
        
      <hr/>
        <SectionList openedSections={oppenedSections}/>
    </div>
  )
}
