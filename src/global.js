import { createGlobalStyle } from 'styled-components'
import darkBg from './images/bg-desktop-dark.jpg'
import lightBg from './images/bg-desktop-light.jpg'
import checked from './icons/icon-check.svg'
import darkBgMobile from './images/bg-mobile-dark.jpg'
import lightBgMobile from './images/bg-mobile-light.jpg'

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  .input-bg {
    background: ${({ theme }) => theme.inputBg};
    position: relative;

    &:indeterminate {
      background: ${({ theme }) => theme.inputBg} !important;
    }
  }

  .nowrap {
    white-space: nowrap;
  }

  body {
    font-family: 'Josefin Sans', sans-serif;
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 100vh;
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
  }

  .checkbox-input {
    cursor: pointer;
    display: block;
    position: relative;
    border-radius: 100%;
    margin-right: 1.3rem; 
    width: 1.5rem;
    height: 1.5rem;
    background: ${({ theme }) => theme.inputBg};
    border: 1.5px solid ${({ theme }) => theme.border};

    
    &.checked {
      background: linear-gradient( to right, hsl(192, 100%, 67%) 0%, hsl(280, 87%, 65%) 100%);
      background-repeat: no-repeat;
      background-position: center;

      &::before {
        background: url(${checked});
        background-repeat: no-repeat;
        background-position: center;
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        width: 100%;
      }
    }
  }

  input[type=checkbox] {
    opacity: 0;
    cursor: pointer;
    z-index: 999;
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
  }

  .bg-light {
    background: url(${lightBg});
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 768px) {
      background: url(${lightBgMobile});  
      background-size: cover;
      background-repeat: no-repeat;
    }
  }

  .bg-dark {
    background: url(${darkBg});
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 768px) {
      background: url(${darkBgMobile});
      background-size: cover;
      background-repeat: no-repeat;
    }
  }

  /* Tasks */
  .task-x {
    position: absolute;
    opacity: 0;
    right: 0;
    margin-right: 2rem;
    color: ${({ theme }) => theme.textCompleted};
    font-size: 2.5rem;
    font-weight: 100;
    font-family: 'Times New Roman', Times, serif;
    cursor: pointer;

    @media (max-width: 768px) {
      opacity: 1;
    }
  }

  .border-task {
    border-bottom: 1px solid ${({ theme }) => theme.border};

    &:hover {
      .task-x {
        opacity: 1;
      }
    }
  }

  .completed-task {
    color: ${({ theme }) => theme.textCompleted};
  }

  .footer {
    color: ${({ theme }) => theme.footerText};
  }

  .footer-filter {
    transition: color .2s ease-in-out;

    &.active {
      color: ${({ theme }) => theme.active};
    }

    &:hover {
      color: ${({ theme }) => theme.text};
    }
  }
  
  .clear-task {
    &:hover {
      color: ${({ theme }) => theme.text};
    }
  }

  .task-footer {
    color: ${({ theme }) => theme.textCompleted};

    @media (min-width: 768px) {
      display: none;
    }
  }

  .footer-desktop {

    @media (max-width: 768px) {
      display: none;
    }
  }
`
