import React from 'react';
import { Button } from '@material-ui/core'; // using hooks

function SignIn () {
    return (
        <div className="mat-ui-button">
            <Button 
                color='secondary'
                variant='outlined'>
                SignIn
            </Button>
        </div>  
    );
  }
  export default SignIn; 

