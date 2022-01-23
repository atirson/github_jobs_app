import styled from 'styled-components/native';

import {lighten, darken} from 'polished';
import {theme} from '@cuteapp/constants/theme';

interface TagsProps {
  color: string;
}

export const Container = styled.View`
  padding: 8px;
  height: 100%;
  background-color: ${theme.colors.secondary};
  border-radius: 10px;
  margin-bottom: 40px;
`;

export const ContainerTags = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Tags = styled.Text<TagsProps>`
  background-color: ${props => lighten(0.135, props.color)};
  color: ${props => darken(0.4, props.color)};
  padding: 4px 6px;
  margin-right: 5px;
  border-radius: 10px;
  margin-top: 5px;
`;

export const TitlePage = styled.Text`
  margin-top: 8px;
  margin-bottom: 5px;
  font-size: 32px;
  color: #fff;
  font-weight: bold;
`;

export const Title = styled.Text`
  margin-top: 8px;
  margin-bottom: 5px;
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const DateText = styled.Text`
  color: #fff;
`;
