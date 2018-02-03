import React, { PropTypes } from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  // styles here that used to be for .test
`

const Label = styled.label`
  // label styles here
`

const Field = ({
  children,
  label,
  name,
}) => (
  <Wrapper>
    <Label htmlFor={name}>{label}</Label>
  { children }
  </Wrapper>
);

Field.propTypes = {
  children: React.PropTypes.node,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Field;