import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ReactComponent as SunIcon } from '../../icons/icon-sun.svg'
import { ReactComponent as MoonIcon } from '../../icons/icon-moon.svg'

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light'

  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      <MoonIcon />
      <SunIcon />
    </ToggleContainer>
  )
}

Toggle.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired
}

export default Toggle

const ToggleContainer = styled.button`
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  width: 100%;

  &:focus {
    outline: none;
  }

  svg {
    height: auto;
    width: 2rem;
    margin-top: 0.3rem;
    transition: opacity 0.3s linear;

    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) =>
        lightTheme ? 'translateX(35px)' : 'translateX(35px)'};
      opacity: ${({ lightTheme }) => (lightTheme ? 1 : 0)};
    }

    // moon icon
    &:nth-child(2) {
      opacity: ${({ lightTheme }) => (lightTheme ? 0 : 1)};
    }
  }

  @media (max-width: 720px) {
    svg {
      // sun icon
      &:first-child {
        transform: ${({ lightTheme }) =>
          lightTheme
            ? 'translateX(35px) scale(0.8)'
            : 'translateX(35px) scale(0.8)'};
        opacity: ${({ lightTheme }) => (lightTheme ? 1 : 0)};
      }

      // moon icon
      &:nth-child(2) {
        transform: scale(0.8);
        opacity: ${({ lightTheme }) => (lightTheme ? 0 : 1)};
      }
    }
  }
`
