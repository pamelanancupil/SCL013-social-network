export const viewPost = () => {
    const divPost = document.createElement('div');
    divPost.innerHTML = `
    <div>

    <p id ='textPost'></p>
      
    </div>
    
    `;
    divPost.setAttribute('id','containerPost');
    return divPost;
};