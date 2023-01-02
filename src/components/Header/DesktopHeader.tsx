import styled from 'styled-components';

export interface DesktopHeaderProps {
  className?: string;
  color: 'dark' | 'light';
}

function DesktopHeaderBase({ className, color }: DesktopHeaderProps) {
  return (
    <header className={className} data-dark={color === 'light'}>
      <section>
        <span>loaneth</span>
      </section>

      <nav>
        <a>
          what we build
        </a>
        <a>
          dashboard
        </a>
        <a>
          take loan
        </a>
        <a>
          pay the loan
        </a>
        <a>
          devs
        </a>
      </nav>

    </header>
  );
}

export const DesktopHeader = styled(DesktopHeaderBase)`
  // ---------------------------------------------
  // style
  // ---------------------------------------------
  background: inherit;
  border-radius:10px;
  margin: 10px;
  padding: 10px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3), 
  0 6px 20px rgba(0, 0, 0, 0.15);
  .after  { 
    z-index: -1;
    filter: blur(10px);
  }
  a {
    text-decoration: none;
  }

  // logo
  > :first-child {
    font-size: 16px;
    font-weight: 900;
    color: white;
  }

  nav {
    a {
      font-size: 13px;
      font-weight: 500;
      color: white;

      &:hover {
        opacity: 0.7;
      }

      &.active {
        font-weight: 900;
        color: #333333;
      }
    }
    backdrop-filter: blur(10px);
  }


  &[data-dark='true'] {
    background-color: #000000;

    > :first-child {
      a {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    nav {
      a {
        color: rgba(255, 255, 255, 0.35);

        &:hover {
          color: rgba(255, 255, 255, 0.5);
        }

        &.active {
          color: rgba(255, 255, 255, 0.6);
        }
      }
    }

  }

  // ---------------------------------------------
  // layout
  // ---------------------------------------------
  height: 84px;
  padding: 0 44px;

  display: flex;
  align-items: center;
  backdrop-filter: blur(10px);

  nav {
    a:not(:last-child) {
      margin-right: 28px;
    }
    display:flex;
    margin-right: 34px;
    backdrop-filter: blur(10px);
  }

  section {
    flex:1;
  }

`; 