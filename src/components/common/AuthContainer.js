import React, {Fragment, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

const AuthContainer = ({children}) => {
  const user = useSelector(state => state.user);
  const history = useHistory();

  useEffect(() => {
    if (user && user.uid) {
      if(user.currentMiniUser===undefined) history.push('/');//TBD- where do I navaigate if logged in??
    } else {
      history.push('/');
    }
  }, [user,history]);

  return (
    <Fragment>{children}</Fragment>
  );
};

export default AuthContainer;
