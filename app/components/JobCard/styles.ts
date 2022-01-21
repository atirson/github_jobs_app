import styled from 'styled-components/native';
import {theme} from '@cuteapp/constants/theme';
import {lighten, darken} from 'polished';

interface TagsProps {
  color: string;
}

export const Container = styled.View`
  height: 140px;
  width: 100%;
  background-color: ${theme.colors.secondary};
  margin-top: 15px;
  border-radius: 8px;
  padding: 8px;
`;

export const TitleJob = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const TitleTopics = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  margin-top: 8px;
  text-align: center;
`;

export const DescriptionJob = styled.FlatList`
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const Topics = styled.Text`
  font-size: 14px;
  color: #fff;
  margin-top: 8px;
`;

export const ContainerTags = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Tags = styled.Text<TagsProps>`
  background-color: ${props => lighten(0.135, props.color)};
  color: ${props => darken(0.4, props.color)};
  padding: 4px 6px;
  margin-right: 5px;
  border-radius: 10px;
`;

export const DateText = styled.Text`
  color: #fff;
`;
