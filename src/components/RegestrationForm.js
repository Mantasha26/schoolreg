import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';



export default function regestrationForm() {
    


    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >

            <Grid container spacing={2} columns={16}  >

                {/* Row 1 */}
                <Grid item xs={8} style={{ marginTop: "20px" }} >

                    <TextField
                        required
                        id="outlined-required"
                        label="School Code"
                        style={{ width: '40%', marginLeft: '34%' }}
                    />

                </Grid>
                <Grid item xs={8} style={{ marginTop: "20px" }}>

                    <TextField
                        required
                        id="outlined-required"
                        label="School Name"
                        style={{ width: '40%' }}
                    />

                </Grid>

                {/* Row 2 */}
                <Grid item xs={8} style={{ marginTop: "20px" }} >

                    <TextField
                        required
                        id="outlined-required"
                        label="Contact Number"
                        style={{ width: '40%', marginLeft: '34%' }}
                    />

                </Grid>
                <Grid item xs={8} style={{ marginTop: "20px" }}>

                    <TextField
                        required
                        id="outlined-required"
                        label="Email ID"
                        style={{ width: '40%' }}
                    />

                </Grid>

                {/* <TextField
                    required
                    id="outlined-required"
                    label="Logo upload"
                    style={{ width: '30%', marginLeft: '24%', marginTop: '20px' }}
                /> */}

                {/* Row 3 */}
                <Grid item xs={8} style={{ marginTop: "20px" }} >

                    <TextField
                        required
                        id="outlined-required"
                        label="Address"
                        style={{ width: '40%', marginLeft: '34%' }}
                    />

                </Grid>


                <Grid item xs={8} style={{ marginTop: "20px" }}>

                    {/* <TextField
                        required
                        id="outlined-required"
                        label="City"
                        style={{ width: '40%' }}
                    /> */}

                    <InputLabel id="demo-simple-select-label" style={{ marginRight: '34%' }}>City</InputLabel>

                    <Select
                        label="District"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        //   onChange={handleChange}
                        style={{ width: '40%' }}

                    >
                        <MenuItem value={1} >Solapur</MenuItem>
                        <MenuItem value={2} >Ahmednagar</MenuItem>
                        <MenuItem value={3} >Akola</MenuItem>
                        <MenuItem value={4} >Amravati</MenuItem>
                        <MenuItem value={5} >Aurangabad</MenuItem>
                        <MenuItem value={6} >Beed</MenuItem>
                        <MenuItem value={6} >Chandrapur</MenuItem>
                    </Select>


                </Grid>

                {/* Row 4 */}
                <Grid item xs={8} style={{ marginTop: "20px" }} >

                    {/* <TextField
                        required
                        id="outlined-required"
                        label="State"
                        style={{ width: '40%', marginLeft: '34%' }}
                    /> */}

                    <InputLabel id="demo-simple-select-label" style={{ marginRight: '10px' }}>State</InputLabel>

                    <Select
                        label="District"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        //   onChange={handleChange}
                        style={{ width: '40%', marginLeft: '34%' }}

                    >
                        <MenuItem value={1} >Solapur</MenuItem>
                        <MenuItem value={2} >Ahmednagar</MenuItem>
                        <MenuItem value={3} >Akola</MenuItem>
                        <MenuItem value={4} >Amravati</MenuItem>
                        <MenuItem value={5} >Aurangabad</MenuItem>
                        <MenuItem value={6} >Beed</MenuItem>
                        <MenuItem value={6} >Chandrapur</MenuItem>
                    </Select>


                </Grid>
                <Grid item xs={8} style={{ marginTop: "20px" }}>

                    {/* <TextField
    required
    id="outlined-required"
    label="District"
    style={{ width: '40%' }}
  /> */}

                    <InputLabel id="demo-simple-select-label" style={{ marginRight: '34%' }}>District</InputLabel>

                    <Select
                        label="District"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        //   onChange={handleChange}
                        style={{ width: '40%' }}

                    >
                        <MenuItem value={1} >Solapur</MenuItem>
                        <MenuItem value={2} >Ahmednagar</MenuItem>
                        <MenuItem value={3} >Akola</MenuItem>
                        <MenuItem value={4} >Amravati</MenuItem>
                        <MenuItem value={5} >Aurangabad</MenuItem>
                        <MenuItem value={6} >Beed</MenuItem>
                        <MenuItem value={6} >Chandrapur</MenuItem>
                    </Select>

                </Grid>

                {/* Row 5 */}
                <Grid item xs={8} style={{ marginTop: "20px" }} >

                    {/* <TextField
                        required
                        id="outlined-required"
                        label="Taluka"
                        style={{ width: '40%', marginLeft: '34%' }}
                    /> */}

                    <InputLabel id="demo-simple-select-label" style={{ marginRight: '10px' }}>Taluka</InputLabel>

                    <Select
                        label="District"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        //   onChange={handleChange}
                        style={{ width: '40%', marginLeft: '34%' }}
                    >
                        <MenuItem value={1} >Solapur</MenuItem>
                        <MenuItem value={2} >Ahmednagar</MenuItem>
                        <MenuItem value={3} >Akola</MenuItem>
                        <MenuItem value={4} >Amravati</MenuItem>
                        <MenuItem value={5} >Aurangabad</MenuItem>
                        <MenuItem value={6} >Beed</MenuItem>
                        <MenuItem value={6} >Chandrapur</MenuItem>
                    </Select>


                </Grid>
                <Grid item xs={8} style={{ marginTop: "20px" }}>

                    <TextField
                        required
                        id="outlined-required"
                        label="Zip Cpde"
                        style={{ width: '40%' }}
                    />

                </Grid>

                {/* Row 6 */}
                <Grid item xs={8} style={{ marginTop: "20px" }} >

                    <TextField
                        required
                        id="outlined-required"
                        label="First Name"
                        style={{ width: '40%', marginLeft: '34%' }}
                    />

                </Grid>
                <Grid item xs={8} style={{ marginTop: "20px" }}>

                    <TextField
                        required
                        id="outlined-required"
                        label="Middle Name"
                        style={{ width: '40%' }}
                    />

                </Grid>


                {/* Row 7 */}
                <Grid item xs={8} style={{ marginTop: "20px" }} >

                    <TextField
                        required
                        id="outlined-required"
                        label="Last Name"
                        style={{ width: '40%', marginLeft: '34%' }}
                    />

                </Grid>
                <Grid item xs={8} style={{ marginTop: "20px" }}>

                    <TextField
                        required
                        id="outlined-required"
                        label="Email Id"
                        style={{ width: '40%' }}
                    />

                </Grid>

                {/* Row 8 */}
                <Grid item xs={8} style={{ marginTop: "20px" }} >

                    <TextField
                        required
                        id="outlined-required"
                        label="Contact No."
                        style={{ width: '40%', marginLeft: '34%' }}
                    />

                </Grid>
                <Grid item xs={8} style={{ marginTop: "20px" }}>

                    <TextField
                        required
                        id="outlined-required"
                        label="Address"
                        style={{ width: '40%' }}
                    />

                </Grid>

                {/* Row 9 */}
                <Grid item xs={8} style={{ marginTop: "20px" }} >

                    {/* <TextField
                        required
                        id="outlined-required"
                        label="City"
                        style={{ width: '40%', marginLeft: '34%' }}
                    /> */}

                    <InputLabel id="demo-simple-select-label" style={{ marginRight: '10px' }}>City</InputLabel>

                    <Select
                        label="District"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        //   onChange={handleChange}
                        style={{ width: '40%', marginLeft: '34%' }}
                    >
                        <MenuItem value={1} >Solapur</MenuItem>
                        <MenuItem value={2} >Ahmednagar</MenuItem>
                        <MenuItem value={3} >Akola</MenuItem>
                        <MenuItem value={4} >Amravati</MenuItem>
                        <MenuItem value={5} >Aurangabad</MenuItem>
                        <MenuItem value={6} >Beed</MenuItem>
                        <MenuItem value={6} >Chandrapur</MenuItem>
                    </Select>


                </Grid>
                <Grid item xs={8} style={{ marginTop: "20px" }}>

                    {/* <TextField
                        required
                        id="outlined-required"
                        label="State"
                        style={{ width: '40%' }}
                    /> */}

                    <InputLabel id="demo-simple-select-label" style={{ marginRight: '34%' }}>State</InputLabel>

                    <Select
                        label="District"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        //   onChange={handleChange}
                        style={{ width: '40%' }}

                    >
                        <MenuItem value={1} >Solapur</MenuItem>
                        <MenuItem value={2} >Ahmednagar</MenuItem>
                        <MenuItem value={3} >Akola</MenuItem>
                        <MenuItem value={4} >Amravati</MenuItem>
                        <MenuItem value={5} >Aurangabad</MenuItem>
                        <MenuItem value={6} >Beed</MenuItem>
                        <MenuItem value={6} >Chandrapur</MenuItem>
                    </Select>


                </Grid>

                {/* Row 10 */}
                <Grid item xs={8} style={{ marginTop: "20px" }} >

                    {/* <TextField
                        required
                        id="outlined-required"
                        label="District"
                        style={{ width: '40%', marginLeft: '34%' }}
                    /> */}

                    <InputLabel id="demo-simple-select-label" style={{ marginRight: '4px' }}>District</InputLabel>

                    <Select
                        label="District"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        //   onChange={handleChange}
                        style={{ width: '40%', marginLeft: '34%' }}
                    >
                        <MenuItem value={1} >Solapur</MenuItem>
                        <MenuItem value={2} >Ahmednagar</MenuItem>
                        <MenuItem value={3} >Akola</MenuItem>
                        <MenuItem value={4} >Amravati</MenuItem>
                        <MenuItem value={5} >Aurangabad</MenuItem>
                        <MenuItem value={6} >Beed</MenuItem>
                        <MenuItem value={6} >Chandrapur</MenuItem>
                    </Select>


                </Grid>
                <Grid item xs={8} style={{ marginTop: "20px" }}>

                    {/* <TextField
                        required
                        id="outlined-required"
                        label="Taluka"
                        style={{ width: '40%' }}
                    /> */}

                    <InputLabel id="demo-simple-select-label" style={{ marginRight: '34%' }}>District</InputLabel>

                    <Select
                        label="District"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        //   onChange={handleChange}
                        style={{ width: '40%' }}

                    >
                        <MenuItem value={1} >Solapur</MenuItem>
                        <MenuItem value={2} >Ahmednagar</MenuItem>
                        <MenuItem value={3} >Akola</MenuItem>
                        <MenuItem value={4} >Amravati</MenuItem>
                        <MenuItem value={5} >Aurangabad</MenuItem>
                        <MenuItem value={6} >Beed</MenuItem>
                        <MenuItem value={6} >Chandrapur</MenuItem>
                    </Select>


                </Grid>

                {/* Row 11 */}
                <Grid item xs={8} style={{ marginTop: "20px" }} >

                    <TextField
                        required
                        id="outlined-required"
                        label="Zip Code"
                        style={{ width: '40%', marginLeft: '34%' }}
                    />

                </Grid>

            </Grid>

            <Button variant="outlined" style={{ borderColor: 'gray', color: 'gray' }}>Outlined</Button>

        </Box>
    )
}
