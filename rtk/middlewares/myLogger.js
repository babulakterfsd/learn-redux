const myLogger = (store) => (next) => (action) => {
    next(action);
};

module.exports = myLogger;
