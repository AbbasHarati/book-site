import React from 'react'
import {FormGroup, Button, Stack, Form } from 'react-bootstrap';



const SearchBox = () => {
    return (
        <div className='header__search '>
            <Form>
                <FormGroup >
                    <Stack direction="horizontal">
                        <Form.Control type="search" placeholder="عبارت جستجو"
                            className='header__input' />
                        <Button variant="primary" type='submit'>
                            <i class="ri-search-line"></i>
                        </Button>
                    </Stack>
                </FormGroup>
            </Form>
        </div>
    )
}

export default SearchBox
