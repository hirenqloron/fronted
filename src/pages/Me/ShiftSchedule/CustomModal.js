import React, { useState } from "react";
import Modal from "react-modal";
import style from "./customModal.module.css";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   inputLabel: {
//     // Add any other styles you want for the InputLabel here
//     '&:hover': {
//       // Override the hover styles here
//       backgroundColor: 'transparent', // Change this to the desired hover behavior
//     },
//   },
//   select: {
//     // Add any other styles you want for the Select here
//     '&:hover': {
//       // Override the hover styles here
//       backgroundColor: 'transparent', // Change this to the desired hover behavior
//     },
//   },
// }));

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background overlay color
        zIndex: 1, // Increase the z-index to overlay other content
        height: '100%',
        // width: 'calc(100% + 10px)',
    },
    content: {
        minWidth: '400px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '0px',
        backgroundColor: '#fff', // Set your desired background color here
        zIndex: 1001, // Ensure the modal is above the overlay
        border: 'none',
        overFlow: 'hidden',
        borderRadius: '0px 0px 3px 3px'
    },
};

Modal.setAppElement("#root"); // Set the app root element for accessibility

function CustomModal({ modalIsOpen, closeModal, onEventAdded }) {
    // const classes = useStyles();
    const [title, setTitle] = useState("");
    const [date, setDate] = useState(new Date());


    const handleEventSubmit = (e) => {
        e.preventDefault();

        onEventAdded({
            title,
            date,
        });
        closeModal();
    };

    const [age, setAge] = useState(1);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        closeModal();
    };

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className={style.customHeader}> <h1 className={style.mainH1}>Add Event</h1>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: '#fff',
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </div>
            <form className={style.formEvent} onSubmit={handleEventSubmit}>
                <div className={style.titleMain}>
                    <label>Title</label>
                    <input
                        className={style.EventTitle}
                        placeholder="Event Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <FormControl fullWidth>
                        <InputLabel
                            // className={classes.inputLabel}
                            id="demo-simple-select-label" />
                        <Select
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value={1}>Personal</MenuItem>
                            <MenuItem value={2}>Business</MenuItem>
                            <MenuItem value={3}>Family</MenuItem>
                            <MenuItem value={4}>Holiday</MenuItem>
                            <MenuItem value={5}>Etc</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className={style.dateDiv}>
                    <label>Start Date</label>
                    <input
                        className={style.inputTime}
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <button className={style.cancelBtn} onClick={closeModal} type="submit">Cancel</button>
                <button className={style.addBtn} type="submit">Add</button>
            </form>
        </Modal >
    );
}

export default CustomModal;
