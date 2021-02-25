import styled from 'styled-components';
import { propToStyle } from '../../../../theme/utils/propToStyle';

export const Box = styled.div`
  ${propToStyle('display')}
  ${propToStyle('flex')}
  ${propToStyle('alignItems')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flexDirection')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('boxShadow')}
  ${propToStyle('padding')}
`;
