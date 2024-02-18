// ParentComponent.tsx
import React from 'react';
import ChildComponent from './ChildComponents';

const ParentComponent = () => {
  return (
    <div>
      {/* Other parent component content */}
      <ChildComponent />
    </div>
  );
};

export default ParentComponent;

