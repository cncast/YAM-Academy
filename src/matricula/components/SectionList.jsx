import { SectionItem } from "./SectionItem"
import { SectionItemLoading } from "./SectionItemLoading";
import { SectionRequestItem } from "./SectionRequestItem";

export const SectionList = ({openedSections, status}) => {
  if(status === 'checking'){
      return (
        <div className="row centered-children">
          
          <SectionRequestItem />
          <SectionItemLoading />
          <SectionItemLoading />
          <SectionItemLoading />
          <SectionItemLoading />
          <SectionItemLoading />
        </div>
    )
  }
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
