import "./content-view.css";

export const ContentView = (todo, setContent) => {
    console.log(todo);
    const container = document.createElement('div');
    container.addEventListener('input', (event) => {
        setContent(todo, event.target.innerText);
    })
    container.contentEditable = true;
    container.className = 'content-view';
    container.innerHTML = todo.content;
    return container;
}