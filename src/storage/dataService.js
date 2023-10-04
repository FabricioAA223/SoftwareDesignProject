
const microorganismsData = [
    {
      id: 1,
      name: 'Aspergillus niger',
      functionalGroup: 'Hongos',
    },
    {
      id: 2,
      name: 'Candida albicans',
      functionalGroup: 'Hongos',
    },
    {
      id: 3,
      name: 'Fusarium oxysporum',
      functionalGroup: 'Hongos',
    },
    {
      id: 4,
      name: 'Phytophttime infestans',
      functionalGroup: 'Pseudohongos',
    },
    {
      id: 5,
      name: 'Clostridium botulinum',
      functionalGroup: 'Bacterias anaerobicas',
    },
    {
      id: 6,
      name: 'Escherichia coli',
      functionalGroup: 'Bacterias aerobicas',
    },
    {
      id: 7,
      name: 'Streptomyces coelicolor',
      functionalGroup: 'Actinomicetos',
    },
];
  
const usersData = [
    {
        id: 1,
        username: 'usuario1',
        email: 'usuario1@example.com',
        passwordHash: '$2b$10$T3OcAa6Ll8iTTZ5/jE6/.efW3a.Wqg3dDQK/tvdGqG72t0ha1K61K', // Contraseña hasheada
        rol: 'Estudiante',
    },
    {
        id: 2,
        username: 'usuario2',
        email: 'usuario2@example.com',
        password : 'diosteama',
        rol: 'Encargado',
    },
    {
        id: 3,
        username: 'usuario3',
        email: 'usuario3@example.com',
        password : 'diosteama',
        rol: 'Administrador',
    },
];

const ReportsSevenDays =  [
    {
        id: 1,
        date: '2023-09-29',
        time:  '12:00:12',
        link:'www.linkalreporte.com',
    },
    {
      id: 2,
        date: '2023-09-27',
        time:  '09:00:12',
        link:'www.linkalreporte.com',
    },
    {
      id: 3,
        date: '2023-09-25',
        time:  '16:00:12',
        link:'www.linkalreporte.com',
    },
]

  const ReportsSemester =  [
    {
      id: 1,
        date: '2023-09-29',
        time:  '12:00:12',
    },
    {
      id: 2,
        date: '2023-10-27',
        time:  '09:00:12',
    },
    {
      id: 3,
        date: '2023-08-25',
        time:  '16:00:12',
    },
    {
      id: 4,
        date: '2023-07-29',
        time:  '12:00:12',
    },
    {
      id: 5,
        date: '2023-06-27',
        time:  '09:00:12',
    },
    {
      id: 6,
        date: '2023-12-25',
        time:  '16:00:12',
    },
        {
          id: 7,
        date: '2023-11-29',
        time:  '12:00:12',
    },
    {
      id: 8,
        date: '2023-08-27',
        time:  '09:00:12',
    },
    {
      id: 9,
        date: '2023-09-25',
        time:  '16:00:12',
    },
    {id: 10,
        date: '2023-10-29',
        time:  '12:00:12',
    },
    {
      id: 11,
        date: '2023-07-27',
        time:  '09:00:12',
    },
    {
      id: 12,
        date: '2023-06-25',
        time:  '16:00:12',
    },
    {
      id: 13,
        date: '2023-09-29',
        time:  '12:00:12',
    },
    {
      id: 14,
        date: '2023-08-27',
        time:  '09:00:12',
    },
    {
      id: 15,
        date: '2023-10-25',
        time:  '16:00:12',
    },
    {
      id: 16,
        date: '2023-11-29',
        time:  '12:00:12',
    },
    {
      id: 17,
        date: '2023-09-27',
        time:  '09:00:12',
    },
    {
      id: 18,
        date: '2023-09-25',
        time:  '16:00:12',
    },
  ]

  export function dividePorMes() {
    // Objeto para almacenar los informes agrupados por mes
    const informesPorMes = {};
  
    // Recorremos la lista de informes
    for (const report of ReportsSemester) {
      // Obtenemos la fecha del informe y extraemos el mes
      const fecha = new Date(report.date);
      const mes = fecha.toLocaleString('default', { month: 'long' });
  
      // Si el mes aún no está en el objeto, lo inicializamos como una lista vacía
      if (!informesPorMes[mes]) {
        informesPorMes[mes] = [];
      }
  
      // Agregamos el informe al mes correspondiente
      informesPorMes[mes].push(report);
    }
  
    return informesPorMes;
  }
  

  // Funciones para obtener los datos
  export function getMicroorganisms() {
    // Puedes aplicar lógica adicional aquí si es necesario
    return microorganismsData;
  }

  export function getFunctionalGroups() {
    // Obtener todos los grupos funcionales únicos de los microorganismos
    const uniqueGroups = [...new Set(microorganismsData.map(microorganism => microorganism.functionalGroup))];
    return uniqueGroups;
  }
  
  export function getMicroorganismById(id) {
    // Buscar el microorganismo por ID y devolverlo
    return microorganismsData.find(microorganism => microorganism.id === id);
  }

  export function getMicroorganismByfunctGroup(functionalGroup) {
    // Filtrar los microorganismos que pertenecen al grupo funcional dado
    return microorganismsData.filter(microorganism => microorganism.functionalGroup === functionalGroup);
  }
  
  export function getUsers() {
    // Puedes aplicar lógica adicional aquí si es necesario
    return usersData;
  }
  
  export function getLastReports() {
    // Puedes aplicar lógica adicional aquí si es necesario
    return ReportsSevenDays;
  }

  export function getLastStats() {
    // Puedes aplicar lógica adicional aquí si es necesario
    return ReportsSemester;
  }

  export function getUserById(id) {
    // Buscar el usuario por ID y devolverlo
    return usersData.find(user => user.id === id);
  }

  export function authenticateUser(email, password) {
    // Simula la lógica de autenticación en el servidor
    const foundUser = usersData.find((user) => user.email === email && user.password === password);
  
    return foundUser;
  }

export {usersData}