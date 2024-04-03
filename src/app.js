import React from "react"
import { Box, AppBar, Toolbar, IconButton, Typography, Container, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import TodoAdder from "./components/todo-adder"
import TodosContainer from "./components/todos-container"

const useStyles = makeStyles((theme)=> ({
    root: {},
    appContainer: {
        paddingRight:100,
        paddingLeft:100,
        marginTop:100,
    },
    wrapper: {
        textAlign: "center",

    },
}));

export default function Todo() {
const classes = useStyles();


    return (
    <Box className={classes.root}>
        <AppBar position="static" >
            <Toolbar>
                <IconButton edge="start" color="inherit">
                    <img
                    alt="Logo" 
                    style={{
                            width:"50px",
                        }} 
                    src="icon.png">
                    </img>
                </IconButton>
                <Typography variant="h5">
                        Todo
                </Typography>
            </Toolbar>
        </AppBar>
        <Container className={classes.appContainer}>
            <Paper className={classes.wrapper} elevation={0}>

            <TodoAdder />

            <TodosContainer />

            </Paper>
        </Container>
    </Box>
    );
}