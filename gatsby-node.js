const axios = require('axios');

exports.createPages = async ({ actions: { createPage } }) => {
  const { data: datafile } = await axios.get('https://cdn.optimizely.com/datafiles/Ua55wZQEBEkSHLPreu6HYt.json');

  // Create a page that lists all Pokémon.
  createPage({
    path: `/`,
    component: require.resolve('./src/templates/index.js'),
    context: { datafile }
  });
};

exports.onCreateWebpackConfig = ({
  actions
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [{
        test: /\.mjs$/,
        type: 'javascript/auto'
      }]
    },
    resolve: { 
      extensions: ['.ts', '.tsx', '.mjs', '.js']
    }
  });
}