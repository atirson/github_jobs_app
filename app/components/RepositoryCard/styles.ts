import styled from 'styled-components/native';
import {theme} from '@cuteapp/constants/theme';

export const Container = styled.View`
  width: 190px;
  height: 160px;
  margin-top: 24px;
  color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  background-color: ${theme.colors.secondary};
  border-radius: 16px;
  margin-right: 20px;
`;

export const Avatar = styled.Image`
  margin-top: 8px;
  width: 68px;
  height: 68px;
  border-radius: 48px;
`;

export const NameRepository = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const OpenIssues = styled.Text`
  color: #d2d4d3;
  font-size: 14px;
`;
