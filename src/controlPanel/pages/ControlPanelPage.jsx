import { AdminLinkCard } from "../../ui/components/AdminLinkCard";
import { InfoCard } from "../../ui/components/InfoCard";
import { Grafic } from "../components/Grafic";

const dataForStudents = {
  labels: ['January', 'February', 'March', 'April'],
  datasets: [{
      label: 'Registros',
      data: [23, 54, 23, 12],
      tension: 0.3,
      borderColor: '#06A1E0',
      pointRadius: 6,
      pointBackgroundColor: '#06A1E0',
      backgroundColor: '#8BD0EC'

  },{
    label: 'Matriculas',
    data: [3, 12, 4, 8],
    tension: 0.3,
    borderColor: '#1ACA7A',
    pointRadius: 6,
    pointBackgroundColor: '#1ACA7A',
    backgroundColor: '#8BECC0'

}]
}

export const ControlPanelPage = () => {
  return (
    <>


      <div className="row container-fluid pt-4 px-3 centered-children">
        <div className="col-sm-6 col-12">
          <Grafic labels={dataForStudents.labels} datasets={dataForStudents.datasets} graficType="Line"/>
        </div>
        <div className="col-sm-6 col-12">
          <Grafic/>
        </div>
        <hr className="col-7" style={{width: '100%', marginTop: '55px'}} />
      </div>



      <div className="row container-fluid pt-4 px-5">
        <div className="col-md-7 col-12">

          <div className="row">
            <div className="col-12 centered-children">
              <InfoCard title="389" text="Usuarios"/>
              <InfoCard title="$ 805" text="Dinero generado"/>
              <InfoCard title="14" text="Fondeos"/>
            </div>
          </div>

          <div className="row">
            <div className="col-12 centered-children">
              <InfoCard title="7" text="Tutores"/>
              <InfoCard title="66" text="Otro resumen X"/>
              <InfoCard title="2" text="Solicitudes de clases"/>
            </div>
          </div>

        </div>

        <div className="col-md-5 col-12">
          <AdminLinkCard to="/adminSections" icon="fas fa-person-chalkboard" title="Administrar Secciones"/>
          <AdminLinkCard to="/" icon="fas fa-comments-dollar" title="Fondeos Pendientes"/>
          <AdminLinkCard to="/" icon="fas fa-keyboard" title="Base de datos del sistema"/>
          <AdminLinkCard to="/" icon="fas fa-keyboard" title="Alguna otra accion del panel"/>
        </div>
      </div>
      
    </>
  )
}
