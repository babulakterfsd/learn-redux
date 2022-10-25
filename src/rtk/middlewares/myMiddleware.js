const myMiddleware = (store) => (next) => (action) => {
    console.log(action.type);
    next(action);
};

export default myMiddleware;
