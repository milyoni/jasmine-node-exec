module.exports.exec = function(filename) {
  if (process.argv[1] == filename) {
    require("kexec")("jasmine-node " + filename);
  }
};
