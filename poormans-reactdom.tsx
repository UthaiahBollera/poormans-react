let ReactDOM = {
    render: (reactElement, container) => {
        const actualDom = document.createElement(reactElement.tag);
        if (['string', 'number'].includes(typeof reactElement)) {
            return container.appendChild(document.createTextNode(String(reactElement)))
        }
        if (reactElement.props) {
            Object.keys(reactElement.props)
                .filter((prop) => prop !== "children")
                .forEach((prop) => actualDom[prop] = reactElement.props[prop]);
        }
        if (reactElement.props.children) {
            reactElement.props.children.forEach(child => {
                ReactDOM.render(child, actualDom);
            });
        }
        container.appendChild(actualDom);
    }
}
export default ReactDOM;