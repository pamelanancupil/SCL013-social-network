export const viewError = () => {
    const divError = document.createElement('div');
    divError.innerHTML = `
        <h1>No existe la página</h1>
    `;
    divError.setAttribute('id', 'containerForm');
    return divError;
};