import { viewHome } from './view/viewHome.js';
import { viewRegister } from './view/viewRegister.js'

export const changeRoute = (hash) => {
    if (hash === '#/register'){
        return showViews (hash)
    } else {
        return showViews(hash)
    }
}

const showViews = (hash) => {
    const container = document.getElementById('root');
    container.innerHTML = '';

    switch (hash){
        case '#/register':
            container.innerHTML= viewRegister();
            break;
        default:
            container.innerHTML=viewHome();
    }
}