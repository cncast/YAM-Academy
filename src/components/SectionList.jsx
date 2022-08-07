import { SectionItem } from "./SectionItem"

export const SectionList = ({openedSections = []}) => {
  console.log('Sections on List: ' + openedSections.length)
  return (
    <div className="row">
      {
        openedSections.map((section) => {
          return <SectionItem section={section} key={section.id}/>;
        })
      }  
    </div>
)
}
