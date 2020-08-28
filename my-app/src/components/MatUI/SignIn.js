import React from 'react';
import { Button } from '@material-ui/core'; // using hooks

function Login () {
    return (
        <div className="mat-ui-button">
            <Button 
                color='secondary'
                variant='outlined'>
                Login
            </Button>
        </div>  
    );
  }
  export default Login; 

