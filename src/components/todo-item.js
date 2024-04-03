import { Checkbox, FormControlLabel, FormGroup, IconButton, ListItem, Typography, ListItemSecondaryAction } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { DELETE_TODO, TOGGLE_COMPLETED, TOGGLE_IMPORTANT } from '../redux/actions';
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function TodoItem({ id, title, completed, important }) {

    const dispatch = useDispatch();

    function toggleCheckBox(params) {
        dispatch({
            type: TOGGLE_COMPLETED,
            payload: {
                id,
            }
        })
    }

    function handleDeleteClick(params) {
        dispatch({
            type: DELETE_TODO,
            payload: {
                id,
            }
        })
    }

    function handleImportantClick(params) {
        dispatch({
            type: TOGGLE_IMPORTANT,
            payload: {
                id,
            }
        })
    }

    return (
        <ListItem dense>
            <FormGroup>
                <FormControlLabel control={<Checkbox checked={completed} name={title} color="primary" onClick={toggleCheckBox} />}
                    label={<Typography
                        style={{
                            textDecoration: completed && "line-through",
                        }}>
                        {title}
                    </Typography>}
                />
            </FormGroup>
            <ListItemSecondaryAction>
                <IconButton onClick={handleImportantClick} edge="end">
                    {important ? <StarIcon /> : <StarBorderIcon />}
                </IconButton>
                <IconButton onClick={handleDeleteClick} edge="end">
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}
