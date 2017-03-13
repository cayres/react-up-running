import Rating from './Rating';
import React, {Component, PropTypes} from 'react';
import Suggest from './Suggest'

class FormInput extends Component {

    getValue(){
        return 'value' in this.refs.input
            ? this.refs.input.value
            : this.refs.input.getValue();
    }

    render(){
        const common = {
            id: this.props.id,
            refs: 'input',
            defaultValue: this.props.defaultValue
        };
        switch (this.props.type){
            case 'year':
                return (
                    <input
                        {...common}
                        type="number"
                        defaultValue={this.props.defaultValue || new Date().getFullYear()}
                    />
                );
            case 'Suggest':
                return <Suggest {...common} options={this.props.options} />;
            case 'Rating':
                return (
                    <Rating 
                        {...common}
                        defaultValue={parseInt(this.props.defaultValue, 10)}
                    />
                )
            case 'text':
                return <textarea {...common}></textarea>;
            default:
                return <input {...common} type="text"/>
        }
    }
}

FormInput.propTypes = {
    type: PropTypes.oneOf(['year', 'Suggest', 'Rating', 'text', 'input']),
    id: PropTypes.string,
    options: PropTypes.array,
    defaultValue: PropTypes.any
};

export default FormInput