import React, {Component} from 'react';
// import './style/switch.css';
import './style/css';
import Switch from 'antd-mobile/lib/switch';
import 'antd-mobile/lib/switch/style/css';

/**
 * Switch
 * 
 */
class SwitchButton extends Component {
    render() {
        let checked = this.props.checked;
        let color = this.props.color;
        let disabled = this.props.disabled;
        return (
            <Switch checked={checked} onChange={this.onSwitchChange.bind(this)} color={color} disabled={disabled}/>
        );
    }

    onSwitchChange() {
        this.props.onChange();
    }
}

export default SwitchButton