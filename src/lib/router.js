import { viewHome } from './view/viewHome.js';
import { viewRegister } from './view/viewRegister.js';
import { viewError } from './view/viewError.js';

export const changeRoute = (hash) => {
    if (hash === '#/register'){
        return showViews (hash)
    } else if (hash === '#/login'){
        return showViews (hash)
    } else if    (hash === '#/home'){
        return showViews (hash)
    }else {
        return showViews(hash)
    }
}

const showViews = (hash) => {
    const container = document.getElementById('root');
    container.innerHTML = '';
    switch (hash){
        case '#/register':
            container.appendChild(viewRegister());
            break;
        case '#/login':
            container.appendChild(viewLogin());
            break;
        case '#/home':
            container.innerHTML= viewHome();
            break;
        default:
            container.appendChild(viewError());
    }
}