import { SectionItem } from "./SectionItem"

export const SectionList = ({openedSections = []}) => {
  console.log('Sections on List: ' + openedSections.length)
  return (
    <div className="row centered-children">
      <h6 className="mt-4">Tenemos {openedSections.length} secciones disponiles para ti:</h6>
      {
        openedSections.map((section) => {
          return <SectionItem section={section} key={section.id}/>;
        })
      }  
    </div>
)
}
