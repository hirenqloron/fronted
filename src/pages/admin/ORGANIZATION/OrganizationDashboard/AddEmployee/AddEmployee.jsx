import { Box, Dialog, DialogTitle, IconButton} from '@mui/material';
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import styleCss from '../OrgDialogs/addEmployeDialog.module.css';
import { Field, Form, Formik } from 'formik';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function AddEmployee ({ handleClickOpen, handleClose, open }) {
    
    

  return (
    <div>
           <Dialog
            // sx={{ '& .MuiDialog-paper': { width: '100%', maxHeight: 435 } }}
            maxWidth='md'
            TransitionProps={{ onEntering: handleClickOpen }}
            onClose={handleClose}
            open={open}
            PaperProps={{
                sx: {
                    minWidth: '900px', // Adjust the width as per your requirements
                },
            }}
            aria-labelledby="customized-dialog-title"
        >
            <DialogTitle className={styleCss.DialogTitle} sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Add Employee Wizard
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: '#FFFFFF',
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <Box sx={{ width: '100%', overflowX: 'hidden' }}>
                <Container>
<Formik>
<Form>
     
          <Row>
            <Col>
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" />
              {/* <ErrorMessage name="name" component="div" className="error" /> */}
            </Col>

            <Col>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              {/* <ErrorMessage name="email" component="div" className="error" /> */}
            </Col>

            <Col>
              <label htmlFor="message">Message</label>
              <Field as="textarea" name="message" />
              {/* <ErrorMessage name="message" component="div" className="error" /> */}
            </Col>


            <Col>
              <label htmlFor="message">Message</label>
              <Field as="textarea" name="message" />
              {/* <ErrorMessage name="message" component="div" className="error" /> */}
            </Col>

            
        </Row>

            <div>
              <button type="submit" >
                Submit
              </button>
            </div>
         
          </Form>
</Formik>
</Container>
                </Box>

          </Dialog>
    </div>
  )
}
