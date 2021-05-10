import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { Box, Close } from '@theme-ui/components';

const StyledBox = styled(Box)`
  background-color: #282c34cc;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  color: #e3e3e3;

  .modal {
    width: 80vw;
    height: 80vh;
    max-height: 80vh;
    background-color: var(--theme-ui-colors-background);
    margin: auto;
    margin-top: 5vh;
    color: var(--theme-ui-colors-primary);
    position: relative;

    .header {
      display: flex;
      justify-content: flex-end;
      padding: 0.5rem;
    }

    .content {
      padding: 0 1rem 1rem 1rem;
    }

    .footer {
      position: absolute;
      bottom: 0;
      display: flex;
      width: 100%;
      padding: 0.5rem;
      background-color: var(--theme-ui-colors-projectCardBackground);
      justify-content: center;
    }
  }
`;

interface ModalProps {
  handleClose: () => void;
  children: JSX.Element;
  actions: JSX.Element;
}

const Modal: React.FC<ModalProps> = ({ handleClose, children, actions }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  return (
    <StyledBox>
      <div className="modal">
        <div className="header">
          <Close onClick={handleClose} sx={{ cursor: 'pointer' }} />
        </div>
        <div className="content">{children}</div>
        <div className="footer">{actions}</div>
      </div>
    </StyledBox>
  );
};

export default Modal;
