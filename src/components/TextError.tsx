import * as React from 'react';

interface ITextErrorProps {
}

const TextError: React.FunctionComponent<ITextErrorProps> = (props) => {
  return (
      <div className='error'>
          {props.children}
      </div>
  )
};

export default TextError;
