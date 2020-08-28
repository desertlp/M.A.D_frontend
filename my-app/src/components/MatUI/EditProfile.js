import React from 'react';
import { Button } from '@material-ui/core'; // using hooks

function EditProfile () {
    return (
        <div className="mat-ui-button">
            <Button 
                color='secondary'
                variant='outlined'>
                Edit
            </Button>
        </div>  
    );
  }
  export default EditProfile; 

