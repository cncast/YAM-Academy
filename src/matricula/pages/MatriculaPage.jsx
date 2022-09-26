import { useEffect } from "react";
import { useSectionStore } from "../../hooks/useSectionStore";
import { SectionList } from "../components/SectionList"

export const MatriculaPage = () => {
  const { startLoadOppenedSection, opennedSections, status } = useSectionStore();
  useEffect(() => {
    startLoadOppenedSection();
  }, [])
   
  return (
    <div className="container">
      <div className="row centered-children">
        
        <h6 className="mt-4 col-1">
          <i className="fas fa-filter fs-3"/>
        </h6>
        <div className="col-3 mt-3 col-xl-3 col-lg-3 col-md-4 col-sm-5 col-5">
          <select className="form-select" aria-label="Default select example">
            <option defaultValue>Idiomas</option>
            <option value="1">Frances</option>
            <option value="2">Ingles</option>
            <option value="3">Portugues</option>
          </select>
        </div>
        <div className="col-3 mt-3 col-xl-3 col-lg-3 col-md-4 col-sm-5 col-5">
          <select className="form-select" aria-label="Default select example">
            <option defaultValue>Niveles</option>
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
        <SectionList openedSections={opennedSections} status={status}/>
    </div>
  )
}
