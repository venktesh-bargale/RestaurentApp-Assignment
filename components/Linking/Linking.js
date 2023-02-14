const config = {
  screens: {
    Home: {
      path: 'Home',
    },
    Details: {
      path: 'Details',
      parse: {
        data: (data) => `${data}`,
      },
    },
    Sample: {
      path: "Sample",
    },
  },
};

const linking = {
  prefixes: ['Restaurant-App://'],
  config,
};

export default linking;
