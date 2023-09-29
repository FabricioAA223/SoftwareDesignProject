
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
      name: 'Phytophthora infestans',
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
        id: 2,
        username: 'usuario2',
        email: 'usuario2@example.com',
        password : 'diosteama',
        rol: 'Administrador',
    },
  ];
  
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
  
  export function getUserById(id) {
    // Buscar el usuario por ID y devolverlo
    return usersData.find(user => user.id === id);
  }

  export function authenticateUser(email, password) {
    // Simula la lógica de autenticación en el servidor
    const foundUser = usersData.find((user) => user.email === email && user.password === password);
  
    return foundUser;
  }