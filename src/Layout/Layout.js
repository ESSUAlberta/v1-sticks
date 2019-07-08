import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from '..';

export class Layout extends Component {
    static propTypes = {
        type: PropTypes.oneOf(["3col", "2col", "narrow", "hero", "5col"]).isRequired,
        data: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    render() {
        console.log(`Loading Layout Type: ${this.props.type}`)
        switch (this.props.type) {
            case "3col":
                return this.render3Col(this.props.data);
            case "2col":
                return this.render2Col(this.props.data);
            case "narrow":
                return this.renderNarrow(this.props.data);
            case "hero":
                return this.renderHero(this.props.data);
            case "5col":
                return this.render5col(this.props.data);
            default:
                return (<div>oops</div>);
        }
    }

    render3Col(data) {
        let renderedData = []
        let elementCreator = ({ component_name, top, left, width, height }) => (
            <div key={`${component_name}.${top},${left}.${width},${height}`} style={{
                position: "absolute",
                top: `${top * 100 / 3}vw`,
                left: `${left * 100 / 3}vw`,
                width: `${width * 100 / 3}vw`,
                height: `${height * 100 / 3}vw`,
                border: "1px solid black"
            }}>
                <Button>{component_name}</Button>
            </div>
        )
        if (data) {
            data.forEach((element, index, dataArr) => {
                renderedData.push(elementCreator(element))
            })
        }
        return (
            <div style={{
                width: "100vw",
                position: 'relative'
            }}
            >
                {renderedData.map(e => e)}
            </div>
        );
    }
    render2Col(data) {
        return (<div>2col</div>);
    }
    renderNarrow(data) {
        return (<div>narrow</div>);
    }
    renderHero(data) {
        return (<div>hero</div>);
    }
    render5col(data) {
        return (<div>5col</div>);
    }

}

export default Layout
