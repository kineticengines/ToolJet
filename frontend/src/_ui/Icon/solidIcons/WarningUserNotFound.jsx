import React from 'react';

const WarningUserNotFound = ({ fill = '#6A727C', width = '25', className = '', viewBox = '0 0 25 25' }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      opacity="0.4"
      d="M8.30796 3.4716C9.04601 2.17613 10.9566 2.17613 11.6946 3.4716L18.0881 14.6937C18.8054 15.9527 17.8718 17.5 16.3947 17.5H3.60787C2.13085 17.5 1.19722 15.9527 1.91453 14.6937L8.30796 3.4716Z"
      fill={fill}
    />
    <path
      d="M10.8346 14.1663C10.8346 14.6266 10.4615 14.9997 10.0013 14.9997C9.54106 14.9997 9.16797 14.6266 9.16797 14.1663C9.16797 13.7061 9.54106 13.333 10.0013 13.333C10.4615 13.333 10.8346 13.7061 10.8346 14.1663Z"
      fill={fill}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 6.875C10.3452 6.875 10.625 7.15482 10.625 7.5V11.6667C10.625 12.0118 10.3452 12.2917 10 12.2917C9.65482 12.2917 9.375 12.0118 9.375 11.6667V7.5C9.375 7.15482 9.65482 6.875 10 6.875Z"
      fill={fill}
    />
  </svg>
);

export default WarningUserNotFound;