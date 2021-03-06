import React, {Component} from 'react';
// import './style/container.css';
import './style/css';

class Container extends Component {
    
    render() {
        return (
            <div className="w-100 d-flex flex-column" style={{height: '100vh'}}>
                {this.renderChildren(this.props)}
            </div>
        );
    }

    renderChildren(props) {
        //遍历所有子组件
        return React.Children.map(props.children, child => {
            return child
        })
    }

}
export default Container