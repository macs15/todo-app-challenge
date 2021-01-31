import styled from 'styled-components'
import PropTypes from 'prop-types'
import Input from './Input'
import Toggle from './Toggle'

const Header = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light'

  return (
    <HeaderContainer
      theme={isLight}
      className={`${
        isLight ? 'bg-light' : 'bg-dark'
      } grid md:grid-cols-6 xl:grid-cols-4 w-full px-6`}
    >
      <div className="md:col-span-4 md:col-start-2 row-start-1 xl:col-span-2 xl:col-start-2 flex justify-between items-center pt-12 pb-8 lg:py-20">
        <h1 className="text-2xl lg:text-4xl header-title text-white font-semibold lg:font-bold tracking-wider">
          TODO
        </h1>
        <div>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
      <div className="md:col-span-4 md:col-start-2 row-start-2 xl:col-span-2 xl:col-start-2 flex items-center mb-14">
        <Input theme={isLight} />
      </div>
    </HeaderContainer>
  )
}

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired
}

export default Header

const HeaderContainer = styled.div`
  background-size: cover;
  position: relative;
`
