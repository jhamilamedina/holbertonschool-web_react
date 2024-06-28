import React, { Component } from 'react';

function WithLogging(WrappedComponent) {
  return class extends Component {
    componentDidMount() {
      const componentName = WrappedComponent.name || 'Component';
      console.log(`Component ${componentName} is mounted`);
    }

    componentWillUnmount() {
      const componentName = WrappedComponent.name || 'Component';
      console.log(`Component ${componentName} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

// Modify the displayName for debugging purposes
WithLogging.displayName = `WithLogging(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

export default WithLogging;
