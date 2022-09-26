import { getModulesByUserType } from "../../helpers/getModulesByUser"
import { ModuloCard } from "../components/ModuloCard"
const components = getModulesByUserType();
export const CampusPage = () => {
  
  return (
    <div className="row centered-children" style={{
      textAlign: 'center',
      width: '80%',
      height: (window.innerHeight * 0.8),
      margin: 'auto',
      marginTop: '4%',
      marginBottom: '5%'
    }}>
      {
        components.map((component)=>{
          return <ModuloCard  key={component.name} component={component} />
        })
      }
    </div>
  )
}
