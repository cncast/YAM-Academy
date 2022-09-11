import { SectionItem } from "./SectionItem"
import { SectionRequestItem } from "./SectionRequestItem";

export const SectionList = ({openedSections}) => {
  return (
    <div className="row centered-children">
      
      <SectionRequestItem />
      {
        openedSections.map((section) => {
          return <SectionItem section={section} key={section._id}/>;
        })
      }  
    </div>
)
}
