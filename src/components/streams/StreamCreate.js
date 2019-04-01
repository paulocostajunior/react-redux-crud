import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
    onSubmit = (formValues) => {
        //console.log(formValues)
        this.props.createStream(formValues)

    }

    render() {
        return (
           <div>
               <h3>
                   <StreamForm onSubmit={this.onSubmit} />
               </h3>
           </div>
        );
    }
}

export default connect(null, { createStream })(StreamCreate);