const myMiddleware = (store) => (next) => (action) => {
    next();
};

export default myMiddleware;
