export default function () {
  return {
    operators: [],
    districts: [],
    vehicles: [],
    transports: [],
    types_of_services: [
      { label: 'Gratuito', value: 'y' },
      { label: 'Descontos', value: 'n' }
    ],
    types_of_operations: [
      { label: 'Sim', value: 'y' },
      { label: 'Não', value: 'n' }
    ],
    lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    failedTokenAttempts: 0,
    sentAnalytics: []
  }
}
