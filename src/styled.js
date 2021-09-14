import styledComponents from "styled-components";

const wrapTagFunction = (tagFunction) => (...params) => {
    // StyledComponent.propTypes = {
    //     theme: object,
    // };
    //
    // StyledComponent.defaultProps = {
    //     theme: designSystem,
    // };

    return tagFunction(...params);
};


export const styled = (Component) => wrapTagFunction(styledComponents(Component));
