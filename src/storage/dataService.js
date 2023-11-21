import axios from 'axios';

const microorganismsData = getMicroorganisms();
  
const usersData = getUsers();

const ReportsSevenDays =  getLastReports();

const ReportsSemester = getLastStats();

const countsResult = [
  {
    nombre: 'Hongo_Fusarium oxysporum',
    count: 23,
  },
  {
    nombre: 'Hongo_Aspergillus niger',
    count: 45,
  },
  {
    nombre: 'Hongo_Candida albicans',
    count: 12,
  },
  {
    nombre: 'Pseudohongo_Phytophttime infestans1',
    count: 47,
  },
  {
    nombre: 'Bacteria anaróbica_Clostridium botulinum',
    count: 96,
  },
  {
    nombre: 'Bacteria anaróbica_Escherichia coli',
    count: 34,
  },
]

export function getCountsResultsXFuntGroup(){
    const countsXGroup = {};
  
    // Recorremos la lista de informes
    for (const count of countsResult) {
      // Obtenemos la fecha del informe y extraemos el mes
      const arrayResult = count.nombre.split('_');
      const funtGroup = arrayResult[0];
  
      // Si el mes aún no está en el objeto, lo inicializamos como una lista vacía
      if (!countsXGroup[funtGroup]) {
        countsXGroup[funtGroup] = [];
      }
  
      // Agregamos el informe al mes correspondiente
      countsXGroup[funtGroup].push({gender : arrayResult[1], count: count.count});
    }
  
    return countsXGroup;
}

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
  

const getMicroorganisms = async () => {
  try {
    const response = await axios.get('http://localhost:3000/microorganisms/read');

    console.log(response.data); // Puedes hacer lo que necesites con la respuesta del servidor
    return data
  } catch (error) {
    console.error('Error al obtener los microorganismos:', error);
  }
};
  
const deleteMicroorganism = async (microorganismId) => {
  try {
    const response = await axios.delete(`http://localhost:3000/microorganisms/delete/${microorganismId}`);

    console.log(response.data); // Puedes hacer lo que necesites con la respuesta del servidor

  } catch (error) {
    console.error('Error al eliminar el microorganismo:', error);
  }
};

const createConteo = async (count, microorganismo_id, reporte_id) => {
  try {
    const response = await axios.post(`http://localhost:3000/counts/create`, {count:count, microorganismo_id:microorganismo_id, reporte_id: reporte_id});

    console.log(response.data); // Puedes hacer lo que necesites con la respuesta del servidor

  } catch (error) {
    console.error('Error al crear el conteo:', error);
  }
};

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

const createMicroorganism = async (name, functGroup) => {
  try {
    const response = await axios.post('http://localhost:3000/microorganisms/create', {nombre:name, functionalGroup:functGroup});

    console.log(response.data); // Puedes hacer lo que necesites con la respuesta del servidor

  } catch (error) {
    console.error('Error al crear el microorganismo:', error);
  }
};
  
const getUsers = async () => {
  try {
    const response = await axios.get('http://localhost:3000/users/getUsers');
    return response
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
};

const updateEmail = async (newEmail) => {
  try {
    const response = await axios.put('http://localhost:3000/users/updateEmail', { email: newEmail });

    console.log(response.data); // Puedes hacer lo que necesites con la respuesta del servidor

  } catch (error) {
    console.error('Error al actualizar el email:', error);
  }
};

const updatePassword = async (currentPassword, newPassword) => {
  try {
    const response = await axios.put('http://localhost:3000/users/updatePassword', { currentPassword, newPassword });

    console.log(response.data); // Puedes hacer lo que necesites con la respuesta del servidor

  } catch (error) {
    console.error('Error al actualizar la contraseña:', error);
  }
};

const deleteReport = async (reportId) => {
  try {
    const response = await axios.delete(`http://localhost:3000/reports/delete/${reportId}`);

    console.log(response.data); // Puedes hacer lo que necesites con la respuesta del servidor

  } catch (error) {
    console.error('Error al eliminar el reporte:', error);
  }
};

const createReport = async (fecha, hora) => {
  try {
    const response = await axios.post('http://localhost:3000/reports/create', {fecha:fecha, hora:hora});

    console.log(response.data); // Puedes hacer lo que necesites con la respuesta del servidor

  } catch (error) {
    console.error('Error al crear el reporte:', error);
  }
};

  
const getLastReports = async () => {
  try {
    const response = await axios.get('http://localhost:3000/reports/read/lastWeek');

    console.log(response.data); // Puedes hacer lo que necesites con la respuesta del servidor
    return data
  } catch (error) {
    console.error('Error al obtener los reportes:', error);
  }
};

const getLastStats = async () => {
  try {
    const response = await axios.get('http://localhost:3000/reports/read');
    return response
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
};

  const getUserById = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:3000/users/${userId}`);
      
      if (!response.data || response.data.length === 0) {
        throw new Error('Usuario no encontrado');
      }
  
      const user = response.data[0];
      return user
  
    } catch (error) {
      console.error('Error al obtener usuario:', error);
    }
  };


  export function authenticateUser(email, password) {
    // Simula la lógica de autenticación en el servidor
    const foundUser = usersData.find((user) => user.email === email && user.password === password);
  
    return foundUser;
  }