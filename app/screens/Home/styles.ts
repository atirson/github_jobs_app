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

export const ContainerRepository = styled.View`
  margin-top: 40px;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
