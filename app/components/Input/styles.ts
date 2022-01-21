import styled from 'styled-components/native';
import {theme} from '@cuteapp/constants/theme';

import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const InputBase = styled.TextInput.attrs({
  placeholderTextColor: '#D2D4D3',
})`
  background-color: ${theme.colors.secondary};
  height: 48px;
  width: 100%;
  padding: 0 8px;
  color: #fff;
  border-radius: 16px;
  padding-left: 16px;
  padding-right: 48px;
`;

export const Icon = styled(Feather).attrs({
  color: '#D2D4D3',
  size: 25,
})`
  position: absolute;
  right: 16px;
`;
