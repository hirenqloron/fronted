import { Button, Dialog, DialogTitle } from '@mui/material';
import axios from 'axios';
import React from 'react';

import deleteIcon from '../../../svgIcons/delete.svg';

function DeleteProject(props) {
    const { onClose, value: valueProp, id, open, ...other } = props;
    const [value, setValue] = React.useState(valueProp);
    const radioGroupRef = React.useRef(null);

    React.useEffect(() => {
        // console.log(open, ' >>> v ',valueProp);
        if (!open) {
            setValue(valueProp);
        }
    }, [valueProp, open]);
    const handleEntering = () => {
        if (radioGroupRef.current != null) {
            radioGroupRef.current.focus();
        }
    };
    const handleCancel = () => {
        onClose();
    };
    const handleDelete = () => {
        axios
        .delete(`http://3.109.153.24:8081/api/v1/auth/deleteProject?userId=${valueProp}`)
        .then((response) => {
        
        onClose(valueProp);
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error deleting item:', error);
        });
    };
    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '405px'} }}
            maxWidth="xs"
            TransitionProps={{ onEntering: handleEntering }}
            open={open}
            {...other}
        >
            <DialogTitle>
                <p style={{ color: '#F06767' }}>
                    <img src={deleteIcon} alt='delete' width="25" style={{ verticalAlign: 'text-bottom', marginRight:'0.2rem' }} />
                    Are you sure delete this?</p>
            </DialogTitle>


            <div style={{ display: 'flex', justifyContent: 'end', padding: '1rem' }}>
                <Button variant="contained" style={{fontFamily:'Public Sans',fontWeight:'500', boxShadow: 'none', border: '1px solid #7367F0', borderRadius: '6px', backgroundColor: '#fff', color: '#6D6976', marginRight: '1rem' }} onClick={handleCancel}>
                    No
                </Button>
                <Button variant="contained" style={{fontFamily:'Public Sans',fontWeight:'500',  boxShadow: 'none', backgroundColor: '#E0DDF9', borderRadius: '6px', border: '1px solid #7367F0', color: '#7367F0', marginRight: '0.5rem' }} onClick={handleDelete}>
                    Yes
                </Button>

            </div>
        </Dialog>
    )
}

export default DeleteProject