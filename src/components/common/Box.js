import styled from 'styled-components';
import { colors } from '../../constants';

export default styled.div`
  display : flex;
  flex-direction: row;
  text-Decoration: none;
  color: inherit;
  background: ${props => props.background || colors.white};
  `