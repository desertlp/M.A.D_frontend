import React from 'react';
import { Button } from '@material-ui/core'; // using hooks
import { Link } from 'react-router-dom';

function RegisterButton () {
    return (
        <div className="mat-ui-button">
            <Button 
                component={Link} to='/register'
                color='secondary'
                variant='outlined'>
                Register
            </Button>
        </div>  
    );
  }
  export default RegisterButton; 

