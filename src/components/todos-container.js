import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, Box, Grid, Typography, Divider, List } from '@material-ui/core';
import TodoItem from './todo-item';

const useStyles = makeStyles(() => ({
    root: {
        margin: 20,
        padding: 20,
        backgroundColor: "rgb(92.9%,92.9%,92.9%)",
    },

}));

export default function TodosContainer() {
    const classes = useStyles();

    const { todos } = useSelector((state) => {
        return {
            todos: state.todos,
        };
    });

const prioritizedTodos = (function prioritise() {
    const importantTodos = [];
    const notImportantTodos = [];

    todos.forEach((todo)=> {
        if(todo.important) {
            importantTodos.push(todo);
        }
        else {
            notImportantTodos.push(todo);
        }
    });

    return importantTodos.concat(notImportantTodos);
})();

    return (
        <Box className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography align="left" variant="h5" gutterBottom>
                        MyTodos
                        <Divider />
                        <List>
                            {prioritizedTodos.map((todo) => {
                                if (!todo.completed) {
                                    return <TodoItem {...todo} />;
                                }
                                else {
                                    return null;
                                }
                            })}
                        </List>
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography align="left" variant="h5" gutterBottom>
                        Completed
                        <Divider />
                        <List>
                            {prioritizedTodos.map((todo) => {
                                if (todo.completed) {
                                    return <TodoItem {...todo} />;
                                }
                                else {
                                    return null;
                                }
                            })}
                        </List>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}
