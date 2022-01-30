import React from 'react';

import {Container, InputBase, Icon} from './styles';

interface InputProps {
  placeholder?: string;
  iconName: string;
}

const Input = ({placeholder, iconName}: InputProps) => {
  const [text, onChangeText] = React.useState('');

  return (
    <Container>
      <InputBase
        value={text}
        onChangeText={value => onChangeText(value)}
        placeholder={placeholder}
      />
      <Icon name={iconName} />
    </Container>
  );
};

export default Input;
