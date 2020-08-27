import React from 'react';
import { Button } from '@material-ui/core'; // using hooks
import { Link } from 'react-router-dom';

function NewBTSButton () {
    return (
        <div className="mat-ui-button">
            <Button 
                component={Link} to='/bts/new'
                color='secondary'
                variant='outlined'>
                Add BTS Photo
            </Button>
        </div>  
    );
  }
  export default NewBTSButton; 

