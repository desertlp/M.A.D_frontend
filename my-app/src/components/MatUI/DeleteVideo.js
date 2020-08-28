import React from 'react';
import { Button } from '@material-ui/core'; // using hooks
import { Link } from 'react-router-dom';

function DeleteVideoButton () {
    return (
        <div className="mat-ui-button">
            <Button 
                component={Link} to='/video/:id/delete'
                color='secondary'
                variant='outlined'>
                Delete Video
            </Button>
        </div>  
    );
  }
  export default DeleteVideoButton; 

