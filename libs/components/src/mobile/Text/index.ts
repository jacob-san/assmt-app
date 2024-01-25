import styled from 'styled-components';

const Text = (props): JSX.Element => {
  const {
    align,
    variant,
    color,
    children,
    theme,
    style,
    opacity = 1,
    ...rest
  } = props;

  return null;

};

const WrapText = styled.View`
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;
  flex-shrink: 1;
`;

const TypographyText = styled.Text`
  text-align: ${({align}) => (align ? align : 'left')};
  color: ${({theme, type, color}) => color};
` as any;

export default Text;
