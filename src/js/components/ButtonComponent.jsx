import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class ButtonComponent extends React.Component{
    
    render(){
        return (<Link to={this.props.to} className={"btn btn-"+this.props.color+" "+this.props.className}>{this.props.label}</Link>);
    }
}
ButtonComponent.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  color: PropTypes.string
};
ButtonComponent.defaultProps = {
  className: '',
  color: 'light'
};
export default ButtonComponent;