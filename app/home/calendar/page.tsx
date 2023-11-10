"use client"

import { Fragment } from "react";
import { useDispatch } from "react-redux"

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { setModule } from "@/app/_store/reducers/ModuleReducer"
import CalendarHeader from "@/app/_components/calendar/CalendarHeader";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { green, grey } from '@mui/material/colors'
import meetingsSeed from '../../_seed/meetings.seed.json'
import LoadingSpinner from "@/app/_components/utils/LoadingSpinner";

export default function page() {
    const theme = createTheme({
        palette: {
            primary: {
                main: green[400],
                light: green[200],
                dark: green[600],
                contrastText: grey[50]
            }
        }
    })

    const data = meetingsSeed

    const state = {
        title: "calendar",
        description: 'Manage your events and upcoming meetings.',
        buttonDescription: 'Add meeting',
        // tableHeaders: ['Name', 'Company', 'Email', 'Phone', 'Status'],
        // tableData: clientsSeed,
        // tableForm: 'ClientForm',
    }

    const dispatch = useDispatch()
    dispatch(setModule(state))

    function handleButton() {

    }

    function selectRow(title: any, element: any): any {
        throw new Error("Function not implemented.");
    }

    return (
        <Fragment>
            <CalendarHeader />
            <main id="calendar-wrapper" className="h-full grid grid-cols-3">
                <section className="m-auto">
                    <ThemeProvider theme={theme}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar
                                className="col-span-1"
                                showDaysOutsideCurrentMonth
                                fixedWeekNumber={6}
                                displayWeekNumber
                            />
                        </LocalizationProvider>
                    </ThemeProvider>
                </section>
                <section className="col-span-2">
                    <h2>Upcoming meetings</h2>
                    {/* <div>
                        {
                            data.length > 0
                                ?
                                <table className='min-w-full text-left '>
                                    <tbody className='overflow-auto '>
                                        {data.map((element: any) => selectRow(title, element))}
                                    </tbody>
                                </table>
                                :
                                <LoadingSpinner />
                        }
                    </div> */}
                </section>
            </main>
        </Fragment>
    )
}

