import React from 'react';
import { Button } from '@material-ui/core'; // using hooks
import { Link } from 'react-router-dom';

function NewVideoButton () {
    return (
        <div className="mat-ui-button">
            <Button 
                component={Link} to='/video/new'
                color='secondary'
                variant='outlined'>
                Add Video
            </Button>
        </div>  
    );
  }
  export default NewVideoButton; 

