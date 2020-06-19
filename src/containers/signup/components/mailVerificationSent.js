import React, { Component } from 'react';
import { withRouter } from "react-router";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography, Container, Button } from '@material-ui/core';
// import AppBar from '@material-ui/core/AppBar';
//import AppBar from './appbar';
import Toolbar from '@material-ui/core/Toolbar';
import Image from '../../../../src/emailVerify.jpg'




const useStyles = theme => ({
    Paper: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
       // marginTop: 140,
       // height: 400
    },

    Congrats: {
        marginTop: 50,
        marginBottom: 60
    },
    image: {
        width: 150,
        height: 150
    },
    button: {
        color: 'white',
        borderRadius: 5
    }
    

});

class EmailVerificationSent extends Component {
   
    handleResend = () => {
        console.log('fdfgfghhnbnb')
    }

    

	render() {
        const { classes, router } = this.props;
		return (
            <Container maxWidth='md'>
                <div>
                <Paper elevation='3' className={classes.Paper}>
                    <div>
                        <img src={Image} className={classes.image}/>
                    </div>
                    <div>
                        <Typography variant='h4' >
                            Email Verification
                        </Typography>
                    </div>
                    <div>
                        <Typography variant='h6' className={classes.Congrats}>
                            A verification link has been sent the email provided.
                        </Typography>
                    </div>
                    <div style={{ background: "#014086", marginBottom: '12px',}}>
                        <Button color="primary" className={classes.button} >
                            Resend Link
                        </Button>
                    </div>
                </Paper>
                </div>
            </Container>
		);
	}
}

export default withRouter(withStyles(useStyles)(EmailVerificationSent));