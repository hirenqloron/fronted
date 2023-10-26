import React, { useState, useRef, useEffect } from 'react'
import './shiftSchedule.css'
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Checkbox from '@mui/material/Checkbox';
import axios from "axios";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import CustomModal from './CustomModal';



const colors = ['#3788d8', '#7367f0'];

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

const ShiftSchedule = () => {
    const [eventColors, setEventColor] = useState(getRandomColor());
    const todayDate = new Date().toLocaleDateString()
    const [value, setValue] = React.useState(dayjs(todayDate));
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [events, setEvents] = useState([]);

    const [apiData, setApiData] = useState([])
    const calendarRef = useRef(null);

    // const onEventAdded = event => {
    //     let calendarApi = calendarRef.current.getApi()
    //     calendarApi.addEvent(event)
    // }



    const options = {
        headers: {
            'X-RapidAPI-Key': '331b36e9b8msh2626531e856cef6p179386jsn16de80b9cf8c',
            'X-RapidAPI-Host': 'public-holiday.p.rapidapi.com'
        }
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const currentYear = new Date().getFullYear()
                await axios.get(`https://public-holiday.p.rapidapi.com/${currentYear}/US`, options)
                    .then(response => setApiData(response.data))
                    .catch(err => console.log(err))
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
        // setEventColor(() => getRandomColor())
    }, []);

    const eventList = apiData.map((data) => ({
        title: data.name,
        date: data.date,
    }));

    const onEventAdded = (event) => {
        setEvents([...events, event]); // Add the event to the state
        let calendarApi = calendarRef.current.getApi();
        calendarApi.addEvent(event);
    };

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const customCheckboxStyle = {
        color: '#7367F0',
    };
    const customCheckboxStylesec = {
        color: 'rgb(234, 84, 85)'
    }
    const customCheckboxStylethird = {
        color: 'rgb(255, 159, 67)'
    }
    const customCheckboxStylefourth = {
        color: 'rgb(40, 199, 111)'
    }
    const customCheckboxStylefift = {
        color: 'rgb(0, 207, 232)'
    }

    return (
        <>
            <div className='main-Shift-Schedule'>
                <div className='inner-Shift-Schedule'>
                    <div className='letf-div-inner-Shift-Schedule'>
                        <div className='plus-add-btn-sift'>
                            <button className='add-btn-sift' onClick={openModal}>+ Add Event</button>
                        </div>
                        <div className='controlledd-calendar'>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DateCalendar']}>
                                    <DemoItem>
                                        <DateCalendar className="custom-datepicker" views={['yea','day']} value={value} onChange={(newValue) => setValue(newValue)} />
                                    </DemoItem>
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>
                        <div className='calendar-filter'>
                            <h2>FILTERS</h2>
                            <form action="/action_page.php">
                                <div className='check-div-box'>
                                    <Checkbox
                                        defaultChecked
                                        style={customCheckboxStyle}
                                    />
                                    <label className='label-input-text-filter' for="vehicle1">View All</label>
                                </div>
                                <div className='check-div-box'>
                                    <Checkbox
                                        defaultChecked
                                        style={customCheckboxStylesec}
                                    />
                                    <label className='label-input-text-filter' for="Personal">Personal</label>
                                </div>
                                <div className='check-div-box'>
                                    <Checkbox
                                        defaultChecked
                                        style={customCheckboxStyle}
                                    />
                                    <label className='label-input-text-filter' for="Business">Business</label>
                                </div>
                                <div className='check-div-box'>
                                    <Checkbox
                                        defaultChecked
                                        style={customCheckboxStylethird}
                                    />
                                    <label className='label-input-text-filter' for="Family">Family</label>
                                </div>
                                <div className='check-div-box'>
                                    <Checkbox
                                        defaultChecked
                                        style={customCheckboxStylefourth}
                                    />
                                    <label className='label-input-text-filter' for="Holiday">Holiday</label>
                                </div>
                                <div className='check-div-box'>
                                    <Checkbox
                                        defaultChecked
                                        style={customCheckboxStylefift}
                                    />
                                    <label className='label-input-text-filter' for="Etc">Etc</label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='rigth-div-inner-Shift-Schedule'>
                        <div>
                            <Fullcalendar
                                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                ref={calendarRef}
                                initialView={"dayGridMonth"}
                                headerToolbar={{
                                    start: "today prev,next",
                                    center: "title",
                                    end: "dayGridMonth,timeGridWeek,timeGridDay",
                                }}
                                height={"90vh"}
                                // events={eventList}
                                // events={[{
                                //     id: 'a',
                                //     title: 'my event',
                                //     start: '2023-09-01',
                                //     backgroundColor: 'red',
                                //     textColor: 'white'
                                // }, {
                                //     id: 'b',
                                //     title: 'my eventasd',
                                //     start: '2023-09-07',
                                //     backgroundColor: 'blue',
                                //     textColor: 'white'
                                // },
                                // {
                                //     id: 'c',
                                //     title: 'my event',
                                //     start: '2023-09-07',
                                //     backgroundColor: 'green',
                                //     textColor: 'white'
                                // },
                                // ]}
                                eventColor={eventColors}
                                eventTextColor='white'
                                className="custom-fullcalendar"
                            />
                        </div>
                    </div>
                    <CustomModal
                        modalIsOpen={modalIsOpen}
                        closeModal={closeModal}
                        onEventAdded={(event) => {
                            let newColor = getRandomColor();
                            onEventAdded(event)
                            setEventColor(((prevEventColors) => [...prevEventColors, newColor]));
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default ShiftSchedule;

// eventColor='#CDF0F4'