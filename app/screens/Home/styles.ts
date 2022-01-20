import styled from 'styled-components/native';
import {theme} from '@cuteapp/constants/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.primary};
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #fff;
  font-weight: bold;
`;
