import React from 'react';
import {LoadingIcon} from './styles';

interface LoadingProps {
  loading: boolean;
}

const Loading = ({loading}: LoadingProps) => {
  return loading ? <LoadingIcon size={25} /> : null;
};

export default Loading;
