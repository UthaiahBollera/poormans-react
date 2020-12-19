let React = {
    createElement: (tag, props, ...children) => {
        if (typeof tag === "function") {
            return tag(props);
        }
        const element = { tag, props: { ...props, children } };
        return element;
    }
};

export default React;