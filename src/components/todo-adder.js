import React, { useState, useRef } from 'react'
import { Box, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { ADD_TODO } from '../redux/actions';

export default function TodoAdder() {

    const [title, setTitle] = useState(null);
    const titleFieldRef = useRef(null);

    const dispatch = useDispatch();

    function handleTextChange(e) {
        setTitle(e.target.value);
    }

    function addTodoItem(params) {
        if(title) {

            dispatch({
                type: ADD_TODO,
                payload: {
                    title,
                },
            });
            setTitle(null);
            titleFieldRef.current.value = "";
        }
    }


    return (
        <Box>
            <TextField
                style={{
                    width: 450,
                }}
                inputRef={titleFieldRef}
                label="Create new task"
                variant="filled"
                onChange={handleTextChange}>
            </TextField>
            <Button
                style={{
                    height: 56,
                }}
                color="primary"
                variant="contained"
                onClick={addTodoItem}
            >
                Add
            </Button>
        </Box>
    );
}
