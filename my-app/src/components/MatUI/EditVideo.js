import React from 'react';
import { Button } from '@material-ui/core'; // using hooks
import { Link } from 'react-router-dom';

function EditVideoButton () {
    return (
        <div className="mat-ui-button">
            <Button 
                component={Link} to='/video/:id/edit'
                color='secondary'
                variant='outlined'>
                Edit Video
            </Button>
        </div>  
    );
  }
  export default EditVideoButton; 

