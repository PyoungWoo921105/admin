module.exports = {
  babel: {
    plugins: [process.env.NODE_ENV !== 'production' && 'babel-plugin-styled-components'].filter(
      Boolean
    ),
  },
};
