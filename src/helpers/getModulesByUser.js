export const getModulesByUserType = (userType) => {
    return [{
        name: 'Historial Academico',
        description: 'Clases matriculadas, y las clases de tus trimestres pasados',
        iconClasses: `fas fa-user-graduate`,
        color: '#B17523',
        path: '/'
      },{
        name: 'Matriculas',
        description: 'Visualizacion de secciones disponiles para matricular',
        iconClasses: `fas fa-book`,
        color: '#3877B6',
        path: '/matricula',
        isBuilding: true
      },{
        name: 'Panel de Control',
        description: 'Estadisticas, graficos, etc',
        iconClasses: 'fas fa-chart-pie',
        color: '#19986A',
        path: '/controlPanel',
        isBuilding: true
      },{
        name: 'Entrenamiento',
        description: 'Practicar las Lecciones de tus clases prsentes y pasadas',
        iconClasses: 'fas fa-dumbbell',
        color: '#CA2B07',
        path: '/'
      },{
        name: 'Vocabularios',
        description: 'Sustantivos, verbos y frases agrupadas por temas',
        iconClasses: 'fas fa-spell-check',
        color: '#EAEA00',
        path: '/'
      },{
        name: 'Tus Solicitudes',
        description: 'Secciones privadas, creditos a tu cuenta, etc',
        iconClasses: 'fa-regular fa-handshake',
        color: '#A500AA',
        path: '/'
      },{
        name: 'Finanzas',
        description: 'Saldos e historial de transacciones',
        iconClasses: 'fas fa-money-bill-transfer',
        color: '#3FD128',
        path: '/'
      }]
}