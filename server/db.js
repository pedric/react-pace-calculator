const mongoose = require('mongoose');

module.exports = function() {
  mongoose.connect(
    'mongodb://pedric:Run4urlif3@ds155529.mlab.com:55529/artikelserien',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  );
};
