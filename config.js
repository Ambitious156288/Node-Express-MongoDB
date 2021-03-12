module.exports = {
  db:
    "mongodb+srv://admin:admin@cluster0.jrtx3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  keySessions: ["MyKey"],
  maxAgeSession: 24 * 60 * 60 * 1000, // 24 hours
};
