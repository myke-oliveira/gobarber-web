import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { ToastMessage } from '../../../hooks/Toast';

import { ToastBox } from './styles'

import { useToast } from '../../../hooks/Toast';

interface ToastProps {
  message: ToastMessage;
}

const Toast: React.FC<ToastProps> = ({ message }) => {
  const { removeToast } = useToast();

  return <ToastBox key={message.id} type={message.type} hasDescription={!!message.description}>
    <FiAlertCircle size={20}/>
    <div>
      <strong>{message.title}</strong>
      {message.description && <p>{message.description}</p>}
    </div>
    <button onClick={() => removeToast(message.id)} type="button">
      <FiXCircle size={18}/>
    </button>
  </ToastBox>
}

export default Toast;
